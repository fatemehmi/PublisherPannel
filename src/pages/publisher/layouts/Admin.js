// Chakra imports
import { Box, ChakraProvider, useDisclosure } from "@chakra-ui/react";
import Footer from "../components/Publisher/Footer/Footer.js";
// Layout components
import Sidebar from "../components/Publisher/Sidebar";
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes.js";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// Custom Chakra theme
import theme from "../theme/theme.js";
// Custom components
import MainPanel from "../components/Publisher/Layout/MainPanel";
import PanelContainer from "../components/Publisher/Layout/PanelContainer";
import PanelContent from "../components/Publisher/Layout/PanelContent";
export default function Dashboard(props) {
	const { ...rest } = props;
	// states and functions
	const [sidebarVariant, setSidebarVariant] = useState("transparent");
	// functions for changing the states from components
	const getRoute = () => {
		// Check if window is defined before accessing it
		return (
			typeof window !== "undefined" &&
			window.location.pathname !== "/admin/full-screen-maps"
		);
	};

	const getRoutes = (routes) => {
		return routes.map((prop, key) => {
			if (prop.collapse) {
				return getRoutes(prop.views);
			}
			if (prop.category === "account") {
				return getRoutes(prop.views);
			}
			if (prop.layout === "/admin") {
				return (
					<Route
						path={prop.layout + prop.path}
						component={prop.component}
						key={key}
					/>
				);
			} else {
				return null;
			}
		});
	};
	const { onOpen } = useDisclosure();

	// Chakra Color Mode
	return (
		<ChakraProvider theme={theme} resetCss={false}>
			<Box display="flex">
				<Sidebar
					routes={routes}
					sidebarVariant={sidebarVariant}
					{...rest}
				/>
				<MainPanel display="flex" w="1800px">
					{getRoute() ? (
						<PanelContent>
							<PanelContainer>
								<Switch>
									{getRoutes(routes)}
									<Redirect
										from="/admin"
										to="/admin/dashboard"
									/>
								</Switch>
							</PanelContainer>
						</PanelContent>
					) : null}
				</MainPanel>
			</Box>
			<Footer />
		</ChakraProvider>
	);
}
