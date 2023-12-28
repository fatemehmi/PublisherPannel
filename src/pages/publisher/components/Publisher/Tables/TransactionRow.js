import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function TransactionRow(props) {
	const textColor = useColorModeValue("gray.700", "white");
	const { name, date, logo, price } = props;

	return (
		<Flex dir="rtl" my="1rem" justifyContent="center" gap="72">
			<Flex alignItems="center">
				<Flex direction="column">
					<Text fontSize="lg" color={textColor} fontWeight="bold">
						{name}
					</Text>
					<Text fontSize="sm" color="gray.400" fontWeight="semibold">
						{date}
					</Text>
				</Flex>
			</Flex>
			<Box
				color={
					price[0] === "+"
						? "green.400"
						: price[0] === "-"
						? "red.400"
						: { textColor }
				}
			>
				<Text
					mt="3"
					display="flex"
					justifyContent="center"
					alignItems="center"
					fontSize="lg"
					fontWeight="bold"
				>
					{price}
				</Text>
			</Box>
		</Flex>
	);
}

export default TransactionRow;
