// Chakra imports
import {
	Box,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
// Assets
import React from "react";
import {
	newestTransactions,
	olderTransactions,
} from "../../../variables/general";
import Transactions from "./components/Transactions";

function Transaction() {
	return (
		<div dir="ltr" display="flex" w="1200px" justifyContent="center">
			<Flex alignItems="center" direction="column" pr="60px" mr="60px">
				<Flex justifyContent="center" w="1000px" minW="600px">
					<Transactions
						title={"تراکنشات شما"}
						date={"فروردین 23-30"}
						newestTransactions={newestTransactions}
						olderTransactions={olderTransactions}
					/>
				</Flex>
			</Flex>
		</div>
	);
}

export default Transaction;
