// Chakra imports
import {
	Button,
	Flex,
	Grid,
	Icon,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "../../../../components/Publisher/Card/Card";
import CardBody from "../../../../components/Publisher/Card/CardBody";
import CardHeader from "../../../../components/Publisher/Card/CardHeader";
import React from "react";

import ProjectCard from "./ProjectCard";

const Projects = ({ title, description }) => {
	// Chakra color mode
	const textColor = useColorModeValue("gray.700", "white");

	return (
		<Card p="16px" my="24px">
			<CardHeader p="12px 5px" mb="12px">
				<Flex direction="column">
					<Text fontSize="lg" color={textColor} fontWeight="bold">
						{title}
					</Text>
					<Text fontSize="sm" color="gray.500" fontWeight="400">
						{description}
					</Text>
				</Flex>
			</CardHeader>
			<CardBody px="5px"></CardBody>
		</Card>
	);
};

export default Projects;
