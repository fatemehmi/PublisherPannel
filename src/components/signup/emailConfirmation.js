import CustomButton from "@/components/ui/CustomButton";
import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";

// TODO:validation

function EmailConfirmation(props) {
  return (
      <CustomCardContainer roundedTop='20px'>
        <CustomCardHeader>تایید آدرس ایمیل</CustomCardHeader>
        <CustomCardParagraph>کد ارسال شده به ایمیل sara@gmail.com را بنویسید:</CustomCardParagraph>
        <HStack justifyContent='space-between' dir='ltr'>
          <PinInput placeholder="">
            <PinInputField w='50px' h='50px' border='2px' borderColor='#464748' borderRadius='8px'  />
            <PinInputField w='50px' h='50px' border='2px' borderColor='#464748' borderRadius='8px' />
            <PinInputField w='50px' h='50px' border='2px' borderColor='#464748' borderRadius='8px' />
            <PinInputField w='50px' h='50px' border='2px' borderColor='#464748' borderRadius='8px' />
            <PinInputField w='50px' h='50px' border='2px' borderColor='#464748' borderRadius='8px' />
            <PinInputField w='50px' h='50px' border='2px' borderColor='#464748' borderRadius='8px' />
          </PinInput>
        </HStack>
        <CustomButton onClick={props.setStep}>ارسال دوباره کد</CustomButton>
        <button onClick={props.emailEditHandler}>ویرایش آدرس ایمیل</button>
      </CustomCardContainer>
  );
}

export default EmailConfirmation;
