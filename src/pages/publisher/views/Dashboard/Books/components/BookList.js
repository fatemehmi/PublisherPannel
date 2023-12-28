import React from "react";
import {
	Box,
	Button,
	Flex,
	Icon,
	Table,
	Tbody,
	Text,
	Th,
	Thead,
	Tr,
	useColorModeValue,
} from "@chakra-ui/react";
import Card from "../../../../components/Publisher/Card/Card.js";
import CardBody from "../../../../components/Publisher/Card/CardBody.js";
import CardHeader from "../../../../components/Publisher/Card/CardHeader.js";
import TablesTableRow from "../../../../components/Publisher/Tables/TablesTableRow";
import { FaPlus } from "react-icons/fa";

const BookList = ({ title, captions, data }) => {
	const textColor = useColorModeValue("gray.700", "white");

	return (
		<Card overflowX="auto">
			<CardHeader p="6px 0px 22px 0px">
				<Box
					display="flex"
					justifyContent="center"
					width="956px"
					flexDir="column"
				>
					<Box display="flex" justifyContent="center" width="956px">
						<Button
							p="0px"
							bg="transparent"
							color="gray.500"
							border="1px solid lightgray"
							borderRadius="15px"
							height="50px"
							width="200px"
						>
							<Flex
								direction="row"
								justifyContent="center"
								align="center"
							>
								<Icon as={FaPlus} fontSize="lg" ml="12px" />
								<Text fontSize="lg" fontWeight="bold">
									اضافه کردن کتاب جدید
								</Text>
							</Flex>
						</Button>
					</Box>
					<Text fontSize="xl" color={textColor} fontWeight="bold">
						{title}
					</Text>
				</Box>
			</CardHeader>
			<CardBody>
				<Table variant="simple" color={textColor}>
					<Thead>
						<Tr my=".8rem" pl="0px" color="gray.400">
							{captions.map((caption, idx) => {
								return (
									idx === 0 && (
										<Th
											color="gray.400"
											key={idx}
											display="flex"
											justifyContent="center"
											mr="-100px"
										>
											{caption}
										</Th>
									)
								);
							})}
						</Tr>
					</Thead>
					<Tbody>
						{data.map((row) => (
							<TablesTableRow
								key={`${row.author}-${row.bookname}`}
								bookname={row.bookname}
								logo={row.logo}
								author={row.author}
								date={row.date}
							/>
						))}
					</Tbody>
				</Table>
			</CardBody>
		</Card>
	);
};

export default BookList;
