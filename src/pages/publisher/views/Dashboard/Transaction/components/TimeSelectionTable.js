import React, { useState } from "react";
import { Input, FormLabel, Flex, Box, Button } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const TimeSelectionTable = () => {
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [startYear, setStartYear] = useState(1399);
	const [endYear, setEndYear] = useState(1402);
	const [selectedMonth, setSelectedMonth] = useState("");
	const [selectedYear, setSelectedYear] = useState("");

	const handleStartChange = (event) => {
		setStartDate(event.target.value);
	};

	const handleEndChange = (event) => {
		setEndDate(event.target.value);
	};

	const generateDayOptions = () => {
		const daysInMonth = 30;
		const dayOptions = [];

		for (let i = 1; i <= daysInMonth; i++) {
			dayOptions.push(
				<option key={i} value={i}>
					{i}
				</option>
			);
		}

		return dayOptions;
	};

	const generateMonthOptions = () => {
		const MonthInYear = [
			"فروردین",
			"اردیبهشت",
			"خرداد",
			"تیر",
			"مرداد",
			"شهریور",
			"مهر",
			"آبان",
			"آذر",
			"دی",
			"بهمن",
			"اسفند",
		];

		const monthOptions = [];

		for (let i = 0; i < MonthInYear.length; i++) {
			monthOptions.push(
				<option key={i} value={i + 1}>
					{MonthInYear[i]}
				</option>
			);
		}

		return monthOptions;
	};

	const generateYearOptions = (startYear, endYear) => {
		const yearOptions = [];

		for (let i = 1; i <= endYear - startYear; i++) {
			yearOptions.push(
				<option key={i} value={i}>
					{endYear - i}
				</option>
			);
		}

		return yearOptions;
	};

	return (
		<>
			<div>
				<Box
					display="flex"
					style={{
						border: "1px solid #a3a3a3",
						borderRadius: "5px",
					}}
					flexDir="row-reverse"
					alignItems="center"
					gap="1"
					padding="5px"
				>
					<Flex direction="column" gap="1">
						<Flex
							w="325px"
							direction="row-reverse"
							padding="2px 2px 0"
						>
							<Box width="40px" paddingLeft="5px">
								<FormLabel
									style={{
										width: "200px",
									}}
									htmlFor="startDate"
									fontSize="md"
								>
									شروع
								</FormLabel>
							</Box>
							<Box
								width="280px"
								display="flex"
								flexDir="row-reverse"
								gap="2"
							>
								<Select
									textAlign="center"
									width="85px"
									placeholder="سال"
									onChange={(e) =>
										setSelectedYear(e.target.value)
									}
								>
									{generateYearOptions(startYear, endYear)}
								</Select>
								<Select
									width="85px"
									placeholder="ماه"
									onChange={(e) =>
										setSelectedMonth(e.target.value)
									}
									style={{
										gridTemplateRows: "repeat(4, 1fr)",
										gridTemplateColumns: "repeat(3, 1fr)",
									}}
								>
									{generateMonthOptions()}
								</Select>
								<Select width="85px" placeholder="روز">
									{generateDayOptions()}
								</Select>
							</Box>
						</Flex>
						<Flex
							w="325px"
							direction="row-reverse"
							padding="2px 2px 0"
						>
							<Box width="40px" paddingLeft="5px">
								<FormLabel
									width="200px"
									htmlFor="startDate"
									fontSize="md"
								>
									پایان
								</FormLabel>
							</Box>
							<Box
								width="280px"
								display="flex"
								flexDir="row-reverse"
								gap="2"
							>
								<Select
									paddingLeft="0"
									width="85px"
									placeholder="سال"
									onChange={(e) =>
										setSelectedYear(e.target.value)
									}
								>
									{generateYearOptions(startYear, endYear)}
								</Select>
								<Select
									width="85px"
									placeholder="ماه"
									onChange={(e) =>
										setSelectedMonth(e.target.value)
									}
									style={{
										gridTemplateRows: "repeat(4, 1fr)",
										gridTemplateColumns: "repeat(3, 1fr)",
									}}
								>
									{generateMonthOptions()}
								</Select>
								<Select width="85px" placeholder="روز">
									{generateDayOptions()}
								</Select>
							</Box>
						</Flex>
					</Flex>
					<Button colorScheme="teal" variant="outline">
						فیلتر
					</Button>
				</Box>
			</div>
		</>
	);
};

export default TimeSelectionTable;
