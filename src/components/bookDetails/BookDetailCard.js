import {
  Flex,
  Image,
  VStack,
  Center,
  Stack,
  Heading,
  HStack,
  Button,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import React from "react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";

function BookDetailCard(props) {
  return (
    <CustomCardContainer height="315px" pt="30px">
      <Flex>
        <div className="w-[250px] h-[339px] absolute top-[-12px] rounded-xl overflow-hidden shadow-[2px_3px_14px_0px_#00000038]">
          <Image
            objectFit="cover"
            width="250px"
            height="339px"
            src="https://cdn.fidibo.com/phoenixpub/content/8b8cd827-fa56-425c-86d1-2c3fdc7e17bd/099c7480-2808-428a-8ad0-fb27850ce735.jpg?width=384"
          />
        </div>
        <Flex width="100%" marginRight="280px">
          <Stack spacing="3" rowGap="18px" flexGrow="1">
            <Heading
              fontFamily="Vazirmatn"
              fontWeight="extrabold"
              fontSize="28px"
            >
              {/* {props.bookname} */}
              دایی جان ناپلئون
            </Heading>
            <HStack>
              <Button
            
                height="16px"
                padding="0px"
                variant="ghost"
                leftIcon={<StarIcon/>}
              />
              <Button
              _hover={{backgroundColor:"white"}}
                width="16px"
                height="16px"
                padding="0"
                variant="ghost"
                leftIcon={<StarIcon />}
              />
              <Button
              _hover={{backgroundColor:"white"}}
                width="16px"
                height="16px"
                padding="0"
                variant="ghost"
                leftIcon={<StarIcon />}
              />
              <Button
              _hover={{backgroundColor:"white"}}
                width="16px"
                height="16px"
                padding="0"
                variant="ghost"
                leftIcon={<StarIcon />}
              />
              <Button
              _hover={{backgroundColor:"white"}}
                width="16px"
                height="16px"
                padding="0"
                variant="ghost"
                leftIcon={<StarIcon />}
              />
              <div>
                <span className="text-[#C8C8C8] text-sm">5 از 78 نظر</span>
              </div>
            </HStack>
            <div className="w-[65px] h-[27px] bg-[#575DFB1A] border-[1px] border-primary rounded-lg flex justify-center items-center ">
              <span className="text-primary text-[12px] font-medium">طنز</span>
            </div>
            <Stack rowGap="20px" flexGrow="1">
              <span className="text-[16px] font-medium text-[#000015]">
                {/* زبان:&nbsp;{props.language} */}
                زبان: فارسی
              </span>
              <span className="text-[16px] font-medium text-[#000015]">
                {/* نویسنده:&nbsp;{props.authorname} */}
                نویسنده: ایرج پزشکزاد
              </span>
              <span className="text-[16px] font-medium text-[#000015]">
                {/* ناشر:&nbsp;{props.publisher} */}
                ناشر: انتشارات فرهنگ معاصر
              </span>
            </Stack>
          </Stack>
          <Center
            width="48px"
            height="48px"
            borderRadius="10px"
            border="1px"
            borderColor="#C8C8C8"
            overflow="hidden"
          >
            <Button _hover={{backgroundColor:"white"}} bgColor="white" w="16px" h="16px"  p="5px">
                <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
            //   className="w-[15px] h-[15px]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            </Button>
            
          </Center>
        </Flex>
      </Flex>
    </CustomCardContainer>
  );
}

export default BookDetailCard;
