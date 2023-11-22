import Sidebar from "@/components/Sidebar";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useRouter } from "next/router";

const TransactionHistory = () => {
	const router = useRouter();
	const pageName = router.pathname;
	const data = [
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
		{
			amount: "30000 تومان",
			date: "1401/12/14",
			transactionType: "واریز به حساب",
			description: "شارژ حساب",
		},
	];

	const slicedData = data.slice(0, 9);

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
								<Td style={tableDataStyle}>
									{row.transactionType}
								</Td>
								<Td style={tableDataStyle}>
									{row.description}
								</Td>
							</Tr>
						))}
					</Tbody>
				</Table>
			</div>
		</Sidebar>
	);
};

export default TransactionHistory;
