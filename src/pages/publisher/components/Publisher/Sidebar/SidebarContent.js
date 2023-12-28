/*eslint-disable*/
// chakra imports
import {
	Box,
	Button,
	Flex,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
import { SidebarHelp } from "../Sidebar/SidebarHelp";
import React from "react";
import { NavLink, useLocation } from "react-router-dom"; // Use react-router-dom for NavLink and useLocation
import { ProfileIcon } from "../Icons/Icons";

// this function creates the links and collapses that appear in the sidebar (left menu)

const SidebarContent = ({ routes }) => {
	const name = "نام انتشارات";

	let mainText = useColorModeValue("gray.700", "gray.200");
	let navbarIcon = useColorModeValue("gray.500", "gray.200");
	mainText = "white";
	navbarIcon = "white";

	// to check for active links and opened collapses
	let location = useLocation();

	// this is for the rest of the collapses
	const [state, setState] = React.useState({});

	// verifies if routeName is the one active (in browser input)
	const activeRoute = (routeName) => {
		return location.pathname === routeName ? "active" : "";
	};

	const createLinks = (routes) => {
		// Chakra Color Mode
		const activeBg = useColorModeValue("white", "gray.700");
		const inactiveBg = useColorModeValue("white", "gray.700");
		const activeColor = useColorModeValue("gray.700", "white");
		const inactiveColor = useColorModeValue("gray.400", "gray.400");

		return routes.map((prop, key) => {
			if (prop.redirect) {
				return null;
			}
			if (prop.category) {
				var st = {};
				st[prop["state"]] = !state[prop.state];
				return (
					<div key={prop.name}>
						<Text
							color={activeColor}
							fontWeight="bold"
							mb="12px"
							mx="auto"
							ps="16px"
							py="12px"
						>
							{prop.name}
						</Text>
						{createLinks(prop.views)}
					</div>
				);
			}
			return (
				<NavLink to={prop.layout + prop.path} key={prop.name}>
					{activeRoute(prop.layout + prop.path) === "active" ? (
						<Button
							boxSize="initial"
							justifyContent="flex-start"
							alignItems="center"
							bg={activeBg}
							mb="12px"
							mx="auto"
							ps="16px"
							py="12px"
							borderRadius="15px"
							_hover="none"
							w="100%"
							_active={{
								bg: "inherit",
								transform: "none",
								borderColor: "transparent",
							}}
							_focus={{
								boxShadow: "none",
							}}
						>
							<Flex>
								{typeof prop.icon === "string" ? (
									<Icon>{prop.icon}</Icon>
								) : (
									<IconBox
										bg="teal.300"
										color="white"
										h="30px"
										w="30px"
										me="12px"
									>
										{prop.icon}
									</IconBox>
								)}
								<Text
									color={activeColor}
									my="auto"
									fontSize="sm"
								>
									{prop.name}
								</Text>
							</Flex>
						</Button>
					) : (
						<Button
							boxSize="initial"
							justifyContent="flex-start"
							alignItems="center"
							bg="transparent"
							mb={{
								xl: "12px",
							}}
							mx={{
								xl: "auto",
							}}
							py="12px"
							ps={{
								sm: "10px",
								xl: "16px",
							}}
							borderRadius="15px"
							_hover="none"
							w="100%"
							_active={{
								bg: "inherit",
								transform: "none",
								borderColor: "transparent",
							}}
							_focus={{
								boxShadow: "none",
							}}
						>
							<Flex>
								{typeof prop.icon === "string" ? (
									<Icon>{prop.icon}</Icon>
								) : (
									<IconBox
										bg={inactiveBg}
										color="teal.300"
										h="30px"
										w="30px"
										me="12px"
									>
										{prop.icon}
									</IconBox>
								)}
								<Text
									color={inactiveColor}
									my="auto"
									fontSize="sm"
								>
									{prop.name}
								</Text>
							</Flex>
						</Button>
					)}
				</NavLink>
			);
		});
	};

	const links = <>{createLinks(routes)}</>;

	return (
		<>
			<Box mt="50px" pt={"25px"} mb="12px">
				<Button
					ms="0px"
					px="0px"
					mr="20px"
					color={navbarIcon}
					variant="transparent-with-icon"
					leftIcon={
						<ProfileIcon
							color={navbarIcon}
							w="22px"
							h="22px"
							me="0px"
						/>
					}
					cursor="default"
				>
					<Text display="flex">{name}</Text>
				</Button>
			</Box>
			<Stack direction="column" mb="40px">
				<Box>{links}</Box>
			</Stack>
			<SidebarHelp />
		</>
	);
};

export default SidebarContent;
