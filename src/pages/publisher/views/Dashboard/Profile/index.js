// Chakra imports
import { Box, Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "../../../assets/img/avatars/avatar4.png";
import React from "react";
import Header from "./components/Header";
import ProfileInformation from "./components/ProfileInformation";

function Profile() {
	// Chakra color mode
	const textColor = useColorModeValue("gray.700", "white");
	const bgProfile = useColorModeValue(
		"hsla(0,0%,100%,.8)",
		"linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
	);

	return (
		<Flex mt="100px" direction="column">
			<Box background="#4fd1c5" borderRadius="30px">
				<Header
					border="1px solid blue"
					backgroundProfile={bgProfile}
					avatarImage={avatar4}
					name={"Esthera Jackson"}
					email={"esthera@simmmple.com"}
				/>
			</Box>
			<Grid templateColumns="1fr" gap="22px">
				<ProfileInformation
					title={"تغییر اطلاعات کاربری"}
					pass={"pass"}
					address={"address"}
					phoneNo1={"phone number 1"}
					phoneNo2={"phone number 2"}
					logo={"logo"}
				/>
			</Grid>
		</Flex>
	);
}

export default Profile;
