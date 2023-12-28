// Chakra imports
import { Flex, Icon, Link, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Publisher/Card/Card";
import CardBody from "../../../../components/Publisher/Card/CardBody";
import CardHeader from "../../../../components/Publisher/Card/CardHeader";
import React from "react";

const ProfileInformation = ({
	title,
	pass,
	address,
	phoneNo1,
	phoneNo2,
	logo,
}) => {
	// Chakra color mode
	const textColor = useColorModeValue("gray.700", "white");

	return (
		<Card p="16px" my="24px">
			<CardHeader p="12px 5px" mb="12px">
				<Text fontSize="lg" color={textColor} fontWeight="bold">
					{title}
				</Text>
			</CardHeader>
			<CardBody px="5px">
				<Flex direction="column">
					<Flex align="center" mb="18px">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							me="10px"
						>
							رمز :{" "}
						</Text>
						<Text fontSize="md" color="gray.500" fontWeight="400">
							{pass}
						</Text>
					</Flex>
					<Flex align="center" mb="18px">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							me="10px"
						>
							آدرس :{" "}
						</Text>
						<Text fontSize="md" color="gray.500" fontWeight="400">
							{address}
						</Text>
					</Flex>
					<Flex align="center" mb="18px">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							me="10px"
						>
							شماره تلفن 1 :{" "}
						</Text>
						<Text fontSize="md" color="gray.500" fontWeight="400">
							{phoneNo1}
						</Text>
					</Flex>
					<Flex align="center" mb="18px">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							me="10px"
						>
							شماره تلفن 2 :{" "}
						</Text>
						<Text fontSize="md" color="gray.500" fontWeight="400">
							{phoneNo2}
						</Text>
					</Flex>
					<Flex align="center" mb="18px">
						<Text
							fontSize="md"
							color={textColor}
							fontWeight="bold"
							me="10px"
						>
							لوگو :{" "}
						</Text>
						<Text fontSize="md" color="gray.500" fontWeight="400">
							{logo}
						</Text>
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default ProfileInformation;
