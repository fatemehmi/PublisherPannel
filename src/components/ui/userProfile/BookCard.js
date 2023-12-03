import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  HStack,
  VStack,
  Center,
} from "@chakra-ui/react";
import Link from "next/link";

function BookCard(props) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      width="100%"
      height="336px"
      borderRadius="20px"
    >
      <Stack width="100%" height="100%">
        <CardBody>
          <HStack
            alignItems="flex-start"
            justifyContent="space-between"
            gap="24px"
          >
            <Link href={`/books/${props.id}`}>
              <Image
                src={props.bookcoverimage}
                width="214px"
                height="295px"
                alt="Green double couch with wooden legs"
                borderRadius="12px"
                border="0.5px"
                borderColor="#C8C8C8"
              />
            </Link>
            <Stack spacing="3" rowGap="20px" flexGrow="1">
              <Heading fontFamily="Vazirmatn" fontWeight="extrabold" fontSize="28px">
                {props.bookname}
              </Heading>
              <HStack alignItems="center">
                <span className="text-[#000015] text-[24px]">
                  {props.price}
                </span>
                <span className="text-[#C8C8C8] text-[12px]">تومان</span>
              </HStack>
              <Stack rowGap="20px" flexGrow="1">
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
            <VStack rowGap="8px">
              <Center
                width="48px"
                height="48px"
                borderRadius="10px"
                border="1px"
                borderColor="#C8C8C8"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="red" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            </Center>
              <span className="text-[12px] font-medium text-[#515457]">
                لایک
              </span>
            </VStack>
            ;
          </HStack>
        </CardBody>
      </Stack>
    </Card>
    // <Card
    //   width="100%"
    //   borderRadius="20px"
    //   padding="24px"
    //   border="0.5px"
    //   borderColor="#000015"
    // >
    //   <CardBody padding="0" rowGap="12px">
    //     <HStack alignItems="flex-start" justifyContent="space-between">
    //       <Link href={`books/${props.id}`}>
    //         <Image
    //           src={props.bookcoverimage}
    //           alt="Green double couch with wooden legs"
    //           borderRadius="12px"
    //           width="214px"
    //           height="336px"
    //           border="0.5px"
    //           borderColor="#C8C8C8"
    //         />
    //       </Link>
    //       <VStack rowGap="8px">
    //         <Box
    //           width="48px"
    //           height="48px"
    //           borderRadius="10px"
    //           border="1px"
    //           borderColor="#C8C8C8"
    //         ></Box>
    //         <span className="text-[12px] font-medium text-[#515457]">لایک</span>
    //       </VStack>
    //     </HStack>

    //   </CardBody>
    // </Card>
  );
}

export default BookCard;
