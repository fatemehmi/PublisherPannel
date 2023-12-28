import React, { useState } from "react";
import {
	Avatar,
	Button,
	Flex,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Td,
	Text,
	Tr,
	useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

function TablesTableRow(props) {
	const { logo, bookname, author, date } = props;
	const textColor = useColorModeValue("gray.700", "white");

	// State to manage modal visibility
	const [isModalOpen, setIsModalOpen] = useState(false);

	// State to store information about the clicked row
	const [clickedRow, setClickedRow] = useState(null);

	// Function to open the modal and set clicked row data
	const openModal = () => {
		setIsModalOpen(true);
		setClickedRow({ bookname, author, date });
	};

	// Function to close the modal
	const closeModal = () => {
		setIsModalOpen(false);
		setClickedRow(null);
	};

	return (
		<>
			<Tr>
				<Td>
					<Flex
						align="center"
						py=".8rem"
						minWidth="100%"
						flexWrap="nowrap"
					>
						<Avatar
							src={logo}
							w="50px"
							borderRadius="12px"
							me="18px"
						/>
						<Flex direction="column">
							<Text
								fontSize="md"
								color={textColor}
								fontWeight="bold"
								minWidth="100%"
							>
								{bookname}
							</Text>
							<Text
								fontSize="sm"
								color="gray.400"
								fontWeight="normal"
							>
								{author}
							</Text>
						</Flex>
					</Flex>
				</Td>

				<Td>
					<Text
						fontSize="md"
						color={textColor}
						fontWeight="bold"
						pb=".5rem"
					>
						{date}
					</Text>
				</Td>
				<Td>
					<Button p="0px" bg="transparent" variant="no-hover">
						<Text
							fontSize="md"
							color="gray.400"
							fontWeight="bold"
							cursor="pointer"
						>
							Delete
						</Text>
					</Button>
				</Td>
				<Td>
					<Button p="0px" bg="transparent" variant="no-hover">
						<Text
							fontSize="md"
							color="gray.400"
							fontWeight="bold"
							cursor="pointer"
						>
							Edit
						</Text>
					</Button>
				</Td>
				<Td>
					<Button p="0px" bg="transparent" onClick={openModal}>
						<Icon
							as={FaEllipsisV}
							color="gray.400"
							cursor="pointer"
						/>
					</Button>
				</Td>
			</Tr>

			{/* Modal */}
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Book Details</ModalHeader>
					<ModalBody>
						<Text>Book Name: {clickedRow?.bookname}</Text>
						<Text>Author: {clickedRow?.author}</Text>
						<Text>Date: {clickedRow?.date}</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={closeModal}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default TablesTableRow;
