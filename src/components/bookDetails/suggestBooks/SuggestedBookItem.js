import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  Text,
  Stack,
  Divider,
} from "@chakra-ui/react";

function SuggestedBookItem() {
  return (
    <Card w="300px" h="502px" paddingX="30px" paddingTop="20px" >
      <CardBody p="0">
        <Image
          src="https://upload.wikimedia.org/wikipedia/fa/4/4e/81059_78299_normal.jpg"
          alt="Green double couch with wooden legs"
          objectFit="fill"
          w="full"
          h="317px"
          p="0"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">ملت عشق</Heading>
          <Text>الیف شافاک</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent="flex-end" pl="0">
        <Text fontSize="2xl">
          $450
        </Text>
      </CardFooter>
    </Card>
  );
}

export default SuggestedBookItem;
