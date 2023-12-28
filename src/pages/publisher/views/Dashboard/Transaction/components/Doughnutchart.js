import {
	Box,
	CircularProgress,
	CircularProgressLabel,
	Flex,
	Text,
} from "@chakra-ui/react";

const DoughnutChart = () => {
	return (
		<Box ml="0px">
			<CircularProgress
				borderRadius="50%"
				size="200"
				value={80}
				thickness={6}
				color="#23dd43"
				variant="vision"
				trackColor="red"
				bg="#4fd1c5"
			>
				<CircularProgressLabel>
					<Flex direction="column" justify="center" align="center">
						<Text color="white" fontSize="30px" fontWeight="bold">
							سود کل
						</Text>
						<Text
							color="#000"
							fontSize="30px"
							fontWeight="semibold"
							mb="4px"
						>
							30000
						</Text>
						<Text color="gray.700" fontSize="sm">
							تومان
						</Text>
					</Flex>
				</CircularProgressLabel>
			</CircularProgress>
		</Box>
	);
};

export default DoughnutChart;
