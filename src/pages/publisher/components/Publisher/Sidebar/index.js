/*eslint-disable*/
// chakra imports
import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import SidebarContent from "./SidebarContent";

// FUNCTIONS

function Sidebar(props) {
	// to check for active links and opened collapses
	const mainPanel = React.useRef();
	let variantChange = "0.2s linear";

	const { routes, sidebarVariant } = props;

	//  Chakra Color Mode
	let sidebarBg = "none";
	let sidebarRadius = "0px";
	let sidebarMargins = "0px";
	if (sidebarVariant === "opaque") {
		sidebarBg = useColorModeValue("white", "gray.700");
		sidebarRadius = "16px";
		sidebarMargins = "16px 0px 16px 16px";
	}

	// SIDEBAR
	return (
		<Box ref={mainPanel}>
			<Box dir="rtl">
				<Box
					bg={sidebarBg}
					transition={variantChange}
					w="260px"
					ms="16px"
					my="16px"
					ps="20px"
					pe="20px"
					m={sidebarMargins}
					borderRadius={sidebarRadius}
				>
					<SidebarContent
						routes={routes}
						sidebarVariant={sidebarVariant}
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default Sidebar;
