import Sidebar from "@/components/Sidebar";
import { Box, Table, Tbody, Td, Tfoot, Th, Thead, Tr } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";

const TransactionHistory = () => {
	const data = [
		{
			amount: "30000 تومان",
			date: "1401/12/14",
			transactionType: "برداشت از حساب",
			description: "شارژ حساب",
		},
		{
			amount: "30000 تومان",
			date: "1401/12/14",
			transactionType: "واریز به حساب",
			description: "شارژ حساب",
		},
		{
			amount: "30000 تومان",
			date: "1401/12/14",
			transactionType: "برداشت از حساب",
			description: "شارژ حساب",
		},
		{
			amount: "30000 تومان",
			date: "1401/12/14",
			transactionType: "واریز به حساب",
			description: "شارژ حساب",
		},
		{
			amount: "30000 تومان",
			date: "1401/12/14",
			transactionType: "برداشت از حساب",
			description: "شارژ حساب",
		},
		{
			amount: "30000 تومان",
			date: "1401/12/14",
			transactionType: "واریز به حساب",
			description: "شارژ حساب",
		},
		{
			amount: "30000 تومان",
			date: "1401/12/14",
			transactionType: "برداشت از حساب",
			description: "شارژ حساب",
		},
		{
			amount: "30000 تومان",
			date: "1401/12/14",
			transactionType: "واریز به حساب",
			description: "شارژ حساب",
		},
		{
			amount: "30000 تومان",
			date: "1401/12/14",
			transactionType: "واریز به حساب",
			description: "شارژ حساب",
		},
	];

	const [currentPage, setCurrentPage] = useState(1);
	const PAGE_SIZE = 7;
	const startIndex = (currentPage - 1) * PAGE_SIZE;
	const endIndex = startIndex + PAGE_SIZE;

	const currentItems = data.slice(startIndex, endIndex);
	const slicedData = currentItems;

	const totalPages = Math.ceil(data.length / PAGE_SIZE);

	const pageButtons = Array.from(
		{ length: Math.min(4, totalPages) },
		(_, index) => index + 1
	);

	const router = useRouter();
	const pageName = router.pathname;

	const tableHeadStyle = {
		fontSize: "16px",
		fontWeight: "600",
		color: "#515457",
	};

	const tableDataStyle = {
		fontSize: "16px",
		fontWeight: "400",
	};

	return (
		<Sidebar pageName={pageName}>
			<div>
				<Table>
					<Thead>
						<Tr>
							<Th style={tableHeadStyle}>مبلغ</Th>
							<Th style={tableHeadStyle}>تاریخ</Th>
							<Th style={tableHeadStyle}>نوع تراکنش</Th>
							<Th style={tableHeadStyle}>شرح</Th>
						</Tr>
					</Thead>
					<Tbody>
						{slicedData.map((row, index) => (
							<Tr key={index}>
								<Td style={tableDataStyle}>{row.amount}</Td>
								<Td style={tableDataStyle}>{row.date}</Td>
								<Td
									style={{
										tableDataStyle,
										color:
											row.transactionType ===
											"واریز به حساب"
												? "#20AA25"
												: "#D62737",
									}}
								>
									{row.transactionType}
								</Td>
								<Td style={tableDataStyle}>
									{row.description}
								</Td>
							</Tr>
						))}
					</Tbody>
					<Tfoot>
						<Box
							dir="ltr"
							display="flex"
							justifyContent="center"
							alignItems="center"
							gap="16px"
							position="relative"
							bottom="-15px"
							right="140%"
						>
							<button
								style={{
									background: "rgba(87, 93, 251, 0.11)",
									width: "24px",
									height: "24px",
									borderRadius: "50%",
								}}
								onClick={() =>
									setCurrentPage((prev) =>
										Math.max(prev - 1, 1)
									)
								}
								disabled={currentPage === 1}
							>
								<ChevronLeftIcon style={{ color: "#575DFB" }} />
							</button>

							{pageButtons.map((page) => (
								<button
									style={{
										fontSize: "16px",
										fontWeight: "400",
										textDecoration:
											currentPage === page
												? "underline"
												: "none",
										color: "#575DFB",
									}}
									key={page}
									onClick={() => setCurrentPage(page)}
									disabled={currentPage === page}
								>
									{page}
								</button>
							))}

							<button
								style={{
									background: "rgba(87, 93, 251, 0.11)",
									width: "24px",
									height: "24px",
									borderRadius: "50%",
								}}
								onClick={() =>
									setCurrentPage((prev) =>
										Math.min(prev + 1, totalPages)
									)
								}
								disabled={endIndex >= data.length}
							>
								<ChevronRightIcon
									style={{ color: "#575DFB" }}
								/>
							</button>
						</Box>
					</Tfoot>
				</Table>
			</div>
		</Sidebar>
	);
};

export default TransactionHistory;
