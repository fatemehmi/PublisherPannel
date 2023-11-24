import useUserProfile from "@/react-query/hooks/useUserProfile";
import {
	Avatar,
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Divider,
	Heading,
	Icon,
	Input,
	Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import { useEffect } from "react";

const listItemStyle = {
	fontSize: "16px",
	height: "48px",
	fontWeight: 500,
};
const dividerStyle = {
	color: "#C8C8C8",
	width: "278px",
	height: "0px",
	stroke: "0.5px",
};
const headingStyle = {
	margin: "4px auto 5px",
	fontSize: "20px",
	fontStyle: "normal",
	lineHeight: "normal",
	fontFamily: "'Vazirmatn', sans-serif",
	fontWeight: "semibold",
};

const Sidebar = (props) => {
	const [input, setInput] = useState("");
	const { pageName } = props;
	const adjustedPageName = pageName.substring(1);
	const { data, isLoading, isSuccess } = useUserProfile();
	const [activeLink, setActiveLink] = useState("");

	useEffect(() => {
		const links = [
			"userProfile",
			"bookmarks",
			"books",
			"transactionHistory",
		];
		const updatedLink = links.find((link) => `/${link}` === activeLink);

		if (updatedLink) {
			setActiveLink(updatedLink);
		}
	}, [activeLink]);

	return (
		<div
			fontFamily="'Vazirmatn', sans-serif"
			display="flex"
			flexDir="column"
			gap="20px"
		>
			<Card
				fontFamily="'Vazirmatn', sans-serif"
				width="284px"
				padding="16px 16px 0px"
				display="flex"
				justifyContent="center"
				alignItems="center"
				gap="10px"
				borderRadius="20px"
				background="#FAFAFA"
				margin="53px 20px auto auto"
			>
				<CardHeader
					display="flex"
					flexDir="column"
					justifyContent="center"
					alignItems="center"
					padding="2px 0px 0px"
				>
					<Avatar
						width="70px"
						height="70px"
						name={isSuccess && data.data.username}
					/>
					<Box
						display="flex"
						flexDir="column"
						justifyContent="center"
						alignItems="center"
					>
						<Heading style={headingStyle}>
							{isLoading && ""}
							{isSuccess && data.data.username}
						</Heading>
						<Text
							fontSize="12px"
							fontStyle="normal"
							fontWeight="200"
							marginBottom="3px"
						>
							{isLoading && ""}
							{isSuccess && data.data.email}
						</Text>
					</Box>
				</CardHeader>
				<Divider style={dividerStyle} />
				<CardBody
					display="flex"
					justifyContent="flex-start"
					alignItems="flex-start"
					flexDir="column"
					width="100%"
					textColor="primary"
					fontSize="20px"
					fontWeight="500"
					paddingRight="20px"
					paddingTop="16px"
					paddingBottom="16px"
				>
					<Box>
						<Icon></Icon> &nbsp; کیف پول من
					</Box>
				</CardBody>
				<Divider style={dividerStyle} />
				<CardFooter
					display="flex"
					justifyContent="flex-start"
					alignItems="flex-start"
					flexDir="column"
					width="100%"
					paddingTop="20px"
					paddingBottom="8px"
					paddingRight="20px"
				>
					<Link
						style={{
							...listItemStyle,
							color:
								activeLink === "userProfile"
									? "#575DFB"
									: "black",
						}}
						className="font-SemiBold"
						href="userProfile"
						onClick={() => setActiveLink("/userProfile")}
					>
						<Icon></Icon> &nbsp; اطلاعات کاربری
					</Link>
					<Link
						style={{
							...listItemStyle,
							color:
								activeLink === "bookmarks"
									? "#575DFB"
									: "black",
						}}
						href="bookmarks"
						onClick={() => setActiveLink("/bookmarks")}
					>
						<Icon></Icon> &nbsp; کتابخانه من
					</Link>
					<Link
						style={{
							...listItemStyle,
							color: activeLink === "books" ? "#575DFB" : "black",
						}}
						href="books"
						onClick={() => setActiveLink("/books")}
					>
						<Icon></Icon> &nbsp; فهرست خواسته‌ها
					</Link>
					<Link
						style={{
							...listItemStyle,
							color:
								activeLink === "transactionHistory"
									? "#575DFB"
									: "black",
						}}
						href="transactionHistory"
						onClick={() => setActiveLink("/transactionHistory")}
					>
						<Icon></Icon> &nbsp; تاریخچه تراکنش‌ها
					</Link>
				</CardFooter>
			</Card>
			<Card
				fontFamily="'Vazirmatn', sans-serif"
				width="1100px"
				padding="24px 60px"
				display="flex"
				justifyContent="space-between"
				alignItems="flex-start"
				flexDirection="row"
				gap="16px"
				borderRadius="20px"
				background="#FAFAFA"
				fontWeight="500"
				lineHeight="normal"
				fontSize="20px"
				margin="-423px 330px auto auto"
			>
				<Box>
					<Icon></Icon> &nbsp;
					{(() => {
						switch (adjustedPageName) {
							case "user/userProfile":
								return "اطلاعات کاربری";
							case "user/wallet":
								return "کیف پول من";
							case "user/transactionHistory":
								return "تاریخچه تراکنش‌ها";
							case "user/bookmarks":
								return "فهرست علاقه‌مندی‌ها";
							case "user/books":
								return "کتابخانه من";
							default:
								return "";
						}
					})()}
				</Box>

				{!(adjustedPageName === "user/userProfile") &&
					!(adjustedPageName === "user/transactionHistory") &&
					!(adjustedPageName === "user/wallet") && (
						<Input
							onChange={(e) => setInput(e.target.value)}
							placeholder="جست‌و‌جو در خواسته‌ها..."
							padding="8px 12px 8px 100px"
							width="277px"
							borderColor="#C8C8C8"
							_placeholder={{
								color: "#C8C8C8",
								fontSize: "12px",
								fontWeight: "500",
							}}
							_focus={{
								borderColor: "#C8C8C8",
								boxShadow: "none",
							}}
						></Input>
					)}
			</Card>
			<Card
				fontFamily="'Vazirmatn', sans-serif"
				margin="20px 330px auto auto"
				width="1100px"
				padding="40px 60px"
				borderRadius="20px"
				background="#FAFAFA"
				style={props.style}
			>
				{React.Children.map(props.children, (child) => {
					return React.cloneElement(child, {
						searchValue: input,
					});
				})}
			</Card>
		</div>
	);
};

export default Sidebar;
