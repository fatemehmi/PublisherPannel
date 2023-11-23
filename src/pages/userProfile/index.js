import Sidebar from "@/components/Sidebar";
import {
	Box,
	Button,
	Card,
	CardBody,
	Divider,
	Icon,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

const headerStyle = {
	fontSize: "20px",
	fontStyle: "normal",
	fontWeight: "600",
};

const labelStyle = {
	collor: "#515457",
	fontSize: "16px",
	fontStyle: "normal",
	fontWeight: "500",
	lineHeight: "24px",
	letterSpacing: "-0.176px",
	marginBottom: "8px",
};

const inputStyle = {
	display: "flex",
	width: "343px",
	padding: "16px 20px",
	justifyContent: "flex-start",
	alignItems: "center",
	gap: "8px",
	border: "1px solid #C8C8C8",
	borderRadius: "16px",
	marginBottom: "16px",
};

const liStyle = {
	fontSize: "16px",
	fontWeight: "400",
	lineHeight: "32px",
	color: "#575DFB",
	listStyleType: "disc",
};

const ruleTitleStyle = {
	color: "#575DFB",
	fontSize: "20px",
	fontWeight: "500",
	lineHeight: "16px",
	marginBottom: "16px",
};

const buttonStyle = {
	width: "343px",
	marginTop: "24px",
	padding: "8px",
	borderRadius: "16px",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "#575DFB",
	fontWeight: "400",
};

const UserProfile = () => {
	const router = useRouter();
	const pageName = router.pathname;
	return (
		<div>
			<Sidebar pageName={pageName}>
				<CardBody>
					<Box
						display="flex"
						flexDir="row"
						justifyContent="space-between"
					>
						<div>
							<h2 style={labelStyle}>نام کاربری</h2>
							<Text
								marginTop="8px"
								border="1px solid #C8C8C8"
								display="flex"
								width="343px"
								padding="16px 20px"
								justifyContent="flex-start"
								alignItems="center"
								borderRadius="16px"
							>
								سارا
							</Text>
						</div>
						<div>
							<h2 style={labelStyle}>ایمیل</h2>
							<Text
								marginTop="8px"
								border="1px solid #C8C8C8"
								display="flex"
								width="343px"
								padding="16px 20px"
								justifyContent="flex-start"
								alignItems="center"
								borderRadius="16px"
							>
								Sara@gmail.com
							</Text>
						</div>
					</Box>
					<Divider margin="32px auto" />
					<Box display="flex" flexDir="row">
						<Icon></Icon>&nbsp;&nbsp;
						<Text style={headerStyle}>تغییر رمز عبور</Text>
					</Box>

					<Box
						marginTop="24px"
						display="flex"
						flexDir="row"
						justifyContent="space-between"
					>
						<div>
							<h2 style={labelStyle}>رمز عبور فعلی</h2>
							<Input style={inputStyle}></Input>
							<h2 style={labelStyle}>رمز عبور جدید</h2>
							<Input style={inputStyle}></Input>
							<h2 style={labelStyle}>تکرار رمز عبور جدید</h2>
							<Input style={inputStyle}></Input>
							<Button color="white" style={buttonStyle}>
								تغییر رمز
							</Button>
						</div>
						<Box
							display="flex"
							padding="24px 40px"
							flexDirection="column"
							justifyContent="center"
							alignItems="flex-start"
							gap="16px"
							borderRadius="16px"
							backgroundColor="#575DFB1A"
							height="248px"
						>
							<ul marginRight="20px">
								<li style={ruleTitleStyle}>رمز عبور باید:</li>
								<li style={liStyle}>
									حداقل 8 کاراکتر داشته باشد.
								</li>
								<li style={liStyle}>
									شامل حروف انگلیسی بزرگ و کوچک باشد.
								</li>
								<li style={liStyle}>حداقل شامل یک عدد باشد.</li>
								<li style={liStyle}>
									حداقل شامل یک کاراکتر باشد.
								</li>
								<li style={liStyle}>با تکرار آن یکسان باشد.</li>
							</ul>
						</Box>
					</Box>
				</CardBody>
			</Sidebar>
		</div>
	);
};

export default UserProfile;
