import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Box,
  HStack,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";

function BookCard(props) {
  return (
    <Card
      width="372px"
      borderRadius="20px"
      padding="24px"
      border="0.5px"
      borderColor="#000015"
    >
      <CardBody padding="0" rowGap="12px">
        <HStack alignItems="flex-start" justifyContent="space-between">
          <Link href={`books/${props.id}`}>
            <Image
              src={props.bookcoverimage}
              alt="Green double couch with wooden legs"
              borderRadius="12px"
              width="214px"
              height="336px"
              border="0.5px"
              borderColor="#C8C8C8"
            />
          </Link>
          <VStack rowGap="8px">
            <Box
              width="48px"
              height="48px"
              borderRadius="10px"
              border="1px"
              borderColor="#C8C8C8"
            ></Box>
            <span className="text-[12px] font-medium text-[#515457]">لایک</span>
          </VStack>
        </HStack>

        <Stack mt="6" spacing="3" rowGap="12px">
          <Heading fontWeight="extrabold" fontSize="28px">
            {props.bookname}
          </Heading>
          <HStack alignItems="center">
            <span className="text-[#000015] text-[24px]">{props.price}</span>
            <span className="text-[#C8C8C8] text-[12px]">تومان</span>
          </HStack>
          <Stack rowGap="8px">
            <span className="text-[16px] font-medium text-[#000015]">
              زبان:&nbsp;{props.language}
            </span>
            <span className="text-[16px] font-medium text-[#000015]">
              نویسنده:&nbsp;{props.authorname}
            </span>
            <span className="text-[16px] font-medium text-[#000015]">
              ناشر:&nbsp;{props.publisher}
            </span>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default BookCard;
