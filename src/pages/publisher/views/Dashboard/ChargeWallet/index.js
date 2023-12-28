// Chakra imports
import { Box, Flex, Icon, useColorModeValue } from "@chakra-ui/react";
// // Assets
import BackgroundCard1 from "../../../assets/img/BackgroundCard1.png";
import React from "react";
import { RiMastercardFill } from "react-icons/ri";
import CreditCard from "./components/CreditCard";
import Pay from "./components/Pay";

function ChargeWallet() {
	return (
		<div dir="ltr" display="flex" w="1200px" justifyContent="center">
			<Flex alignItems="center" direction="column" pt="75px">
				<Flex
					justifyContent="center"
					w="1000px"
					minW="600px"
					p="20px"
					dir="row"
				>
					<CreditCard
						backgroundImage={BackgroundCard1}
						title={"Purity UI"}
						number={"7812 2139 0823 XXXX"}
						validity={{
							name: "VALID THRU",
							data: "05/24",
						}}
						cvv={{
							name: "CVV",
							code: "09x",
						}}
						icon={
							<Icon
								as={RiMastercardFill}
								w="48px"
								h="auto"
								color="gray.400"
							/>
						}
					/>
					<Pay />
				</Flex>
			</Flex>
		</div>
	);
}

export default ChargeWallet;
