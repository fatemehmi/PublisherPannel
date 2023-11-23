import Sidebar from "@/components/Sidebar";
import {
	Box,
	Button,
	CardHeader,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useRouter } from "next/router";
import useWallet from "@/react-query/hooks/usewallet";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useBalance from "@/react-query/hooks/useBalance";

const persianToEnglish = (persianValue) => {
	const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
	const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

	for (let i = 0; i < 10; i++) {
		persianValue = persianValue.replace(
			new RegExp(persianDigits[i], "g"),
			englishDigits[i]
		);
	}

	return persianValue;
};

const coinStyle = {
	height: "110px",
	width: "165px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
};

const Wallet = () => {
	const { mutate, isLoading } = useWallet();
	const [inputValue, setInputValue] = useState("۲۰۰۰۰۰");

	const currentAmount = ""; // this will be change. it is for test only

	const handleInputChange = (event) => {
		const persianValue = event.target.value.replace(/[0-9]/g, (match) => {
			const persianDigits = [
				"۰",
				"۱",
				"۲",
				"۳",
				"۴",
				"۵",
				"۶",
				"۷",
				"۸",
				"۹",
			];
			return persianDigits[+match];
		});

		setInputValue(persianValue);
	};

	const handleKeyPress = (event) => {
		const isValidInput = /^[0-9]*$/.test(event.key);

		if (!isValidInput) {
			event.preventDefault();
		}
	};

	const router = useRouter();
	const pageName = router.pathname;
	const { balance, isError } = useBalance();

	return (
		<div>
			<Sidebar pageName={pageName}>
				<Box display="flex" flexDir="row" marginBottom="32px">
					<Text fontWeight="700">
						<span style={{ fontSize: "24px" }}>
							دارایی حساب شما:
						</span>
						{currentAmount !== "" ? (
							<>
								<span style={{ fontSize: "32px" }}>
									&nbsp; {currentAmount.toLocaleString()}
								</span>
								<span
									style={{
										fontSize: "24px",
										color: "#C8C8C8",
									}}
								>
									{balance}
									تومان
								</span>
							</>
						) : (
							<span> درحال بارگیری اطلاعات...</span>
						)}
					</Text>
				</Box>
				<Text fontSize="16px" fontWeight="500">
					لطفا میزان شارژ کیف پول خود را انتخاب کنید:
				</Text>
				<Box
					display="flex"
					justifyContent="flex-start"
					alignItems="flex-start"
					flexDirection="row"
					marginTop="24px"
					marginBottom="32px"
					gap="60px"
					paddingRight="50px"
				>
					<Box
						height="192px"
						width="248px"
						padding="8px 15px 16px"
						border="0.5px solid #DD8114"
						borderRadius="16px"
						onClick={() => setInputValue("۲۰۰۰۰۰")}
						style={{ cursor: "pointer" }}
					>
						<div style={coinStyle}></div>
						<Text
							display="flex"
							justifyContent="center"
							alignItems="center"
							color="#DD8114"
							fontSize="24px"
							fontWeight="500"
						>
							۲۰۰هزار تومان
						</Text>
					</Box>
					<Box
						height="192px"
						width="248px"
						padding="8px 15px 16px"
						border="0.5px solid #6F8595"
						borderRadius="16px"
						onClick={() => setInputValue("۱۰۰۰۰۰")}
						style={{ cursor: "pointer" }}
					>
						<div style={coinStyle}></div>
						<Text
							display="flex"
							justifyContent="center"
							alignItems="center"
							color="#6F8595"
							fontSize="24px"
							fontWeight="500"
						>
							۱۰۰هزار تومان
						</Text>
					</Box>
					<Box
						height="192px"
						width="248px"
						padding="8px 15px 16px"
						border="0.5px solid #7E4200"
						borderRadius="16px"
						onClick={() => setInputValue("۵۰۰۰۰")}
						style={{ cursor: "pointer" }}
					>
						<div style={coinStyle}></div>
						<Text
							display="flex"
							justifyContent="center"
							alignItems="center"
							color="#7E4200"
							fontSize="24px"
							fontWeight="500"
						>
							۵۰هزار تومان
						</Text>
					</Box>
				</Box>
				<Text fontSize="16px" fontWeight="500" marginBottom="16px">
					یا به صورت دستی وارد کنید:
				</Text>

				<Formik
					initialValues={{
						amount: "",
					}}
					validationSchema={Yup.object({
						amount: Yup.number()
							.required("Amount is required")
							.min(10000, "Amount must be at least 10000")
							.max(2000000, "Amount must be at most 2000000"),
					})}
					onSubmit={(values, { setSubmitting }) => {
						const amount = parseInt(
							persianToEnglish(inputValue),
							10
						);
						console.log(isLoading);
						mutate({
							amount: amount,
						});
						setSubmitting(false);
					}}
				>
					{(formik) => (
						<Box
							display="flex"
							justifyContent="flex-start"
							gap="16px"
							alignItems="center"
						>
							<InputGroup
								border="0.5px solid #C8C8C8"
								borderRadius="16px"
								width="376px"
								height="41px"
							>
								<Input
									name="amount"
									border="none"
									type="number"
									onKeyPress={handleKeyPress}
									value={inputValue}
									onChange={handleInputChange}
									width="100%"
									height="41px"
									borderRadius="16px"
									padding="0px 20px"
								></Input>
								<InputRightElement>
									<Text fontSize="md" mr={-20}>
										تومان
									</Text>
								</InputRightElement>
							</InputGroup>
							<Button
								type="submit"
								borderRadius="12px"
								bg="#575DFB"
								width="198px"
								padding="8px"
							>
								خرید
							</Button>
						</Box>
					)}
				</Formik>
			</Sidebar>
		</div>
	);
};

export default Wallet;
