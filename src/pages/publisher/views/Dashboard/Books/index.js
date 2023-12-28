// Chakra imports
import { Flex, Grid } from "@chakra-ui/react";
import React from "react";
import Projects from "./components/Projects";
import BookList from "./components/BookList";
import Conversations from "./components/Conversations";
import { tablesTableData } from "../../../variables/general";

function books() {
	return (
		<Flex direction="column" mt="30px" mr="20px">
			<Grid templateColumns="repeat(1, 1fr)" gap="22px">
				<Projects />
			</Grid>

			<Grid templateColumns="repeat(1, 1fr)" gap="22px">
				<BookList
					title={"لیست کتاب ها"}
					captions={["کتاب", "", "", "", ""]}
					data={tablesTableData}
				/>
			</Grid>

			<Grid templateColumns="repeat(1, 1fr)" gap="22px">
				<Conversations title={"کامنت ها"} />
			</Grid>
		</Flex>
	);
}

export default books;
