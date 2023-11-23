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
					<Avatar width="70px" height="70px" name="Sara Karimi" />
					<Box
						display="flex"
						flexDir="column"
						justifyContent="center"
						alignItems="center"
					>
						<Heading style={headingStyle}>sara karimi</Heading>
						<Text
							fontSize="12px"
							fontStyle="normal"
							fontWeight="200"
							marginBottom="3px"
						>
							sara@gmail.com
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
						style={listItemStyle}
						className="font-SemiBold"
						href="#"
					>
						<Icon></Icon> &nbsp; اطلاعات کاربری
					</Link>
					<Link style={listItemStyle} href="#">
						<Icon></Icon> &nbsp; کتابخانه من
					</Link>
					<Link style={listItemStyle} href="#">
						<Icon></Icon> &nbsp; فهرست خواسته‌ها
					</Link>
					<Link style={listItemStyle} href="#">
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
				margin="-473px 330px auto auto"
			>
				<Box>
					<Icon></Icon> &nbsp;
					{(() => {
						switch (adjustedPageName) {
							case "userProfile":
								return "اطلاعات کاربری";
							case "wallet":
								return "کیف پول من";
							case "transactionHistory":
								return "تاریخچه تراکنش‌ها";
							case "favoriteBooks":
								return "فهرست علاقه‌مندی‌ها";
							case "myBooks/Booklist":
								return "کتابخانه من";
							default:
								return "";
						}
					})()}
				</Box>

				{!(adjustedPageName === "userProfile") &&
					!(adjustedPageName === "wallet") &&
					!(adjustedPageName === "traactionHistory") && (
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
