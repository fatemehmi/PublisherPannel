// Chakra imports
import {
	Box,
	Flex,
	Icon,
	Text,
	useColorModeValue,
	ChakraProvider,
	CSSReset,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Publisher/Card/Card.js";
import CardBody from "../../../../components/Publisher/Card/CardBody.js";
import CardHeader from "../../../../components/Publisher/Card/CardHeader.js";
import TransactionRow from "../../../../components/Publisher/Tables/TransactionRow";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import DoughnutChart from "./Doughnutchart";
import { SearchBar } from "./SearchBar";
import { Separator } from "../../../../components/Publisher/Separator/Separator";
import TimeSelectionTable from "./TimeSelectionTable";

const Transactions = ({
	title,
	date,
	newestTransactions,
	olderTransactions,
}) => {
	// Chakra color mode
	const textColor = useColorModeValue("gray.700", "white");

	return (
		<Card my="24px">
			<CardHeader mb="12px">
				<Flex direction="column" w="100%">
					<Flex align="center" ml="200px" direction="row" gap="210px">
						<DoughnutChart />
						<Flex
							direction="column"
							mt="20px"
							align="flex-end"
							justify="center"
							w="200px"
							gap="10px"
							h="70%"
						>
							<Text
								color={textColor}
								fontSize="30"
								fontWeight="semibold"
							>
								{title}
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</CardHeader>
			<Separator my="20px" />
			<CardBody>
				<Flex
					mr="150px"
					alignItems="flex-end"
					direction="column"
					w="100%"
				>
					<Flex direction="row" gap="70px" alignItems="center">
						<ChakraProvider>
							<CSSReset />

							<TimeSelectionTable />
						</ChakraProvider>
						<Flex>
							<SearchBar />
						</Flex>
					</Flex>

					<Text
						color="gray.400"
						fontSize="md"
						fontWeight="semibold"
						my="12px"
					>
						جدید
					</Text>
					{newestTransactions.map((row) => {
						return (
							<>
								<TransactionRow
									name={row.name}
									date={row.date}
									price={row.price}
								/>
							</>
						);
					})}
					<Text
						color="gray.400"
						fontSize="md"
						fontWeight="semibold"
						my="12px"
					>
						قدیمی
					</Text>
					{olderTransactions.map((row) => {
						return (
							<TransactionRow
								name={row.name}
								date={row.date}
								price={row.price}
							/>
						);
					})}
				</Flex>
			</CardBody>
		</Card>
	);
};

export default Transactions;
