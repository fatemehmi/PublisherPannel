import CustomButton from "@/components/ui/CustomButton";
import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import { PinInput, PinInputField, HStack } from "@chakra-ui/react";
import useSendVerificationCode from "@/react-query/hooks/useSendVerificationCode";
// TODO:validation

function EmailConfirmation(props) {
  // const [disable, setDisable] = useState(true);

  const{mutate,isLoading,error}=useSendVerificationCode(props.setStep)

  // const buttonHandler = () => {
  //   setTimeout(() => {
  //     setDisable(false);
  //   }, 30000);
  // };

  return (

    <CustomCardContainer roundedTop="20px">
      <CustomCardHeader>تایید آدرس ایمیل</CustomCardHeader>
      <CustomCardParagraph>
        کد ارسال شده به ایمیل {props.email} را بنویسید:
      </CustomCardParagraph>
      <form>
        <HStack justifyContent="space-between" dir="ltr">
          <PinInput
            placeholder=""
            variant="flushed"
            autoFocus={true}
            focusBorderColor="primary"
            errorBorderColor="error"
            onComplete={(value) => {
              mutate({
                email:props.email,
                activation_code:value
              });

              // buttonHandler();
            }}
          >
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
            <PinInputField
              w="50px"
              h="50px"
              border="2px"
              borderColor="#464748"
              borderRadius="8px"
            />
          </PinInput>
        </HStack>
      </form>
      <CustomButton>ارسال دوباره کد</CustomButton>
      <div className="text-right">
        <button
          onClick={props.emailEditHandler}
          className="font-normal text-[16px] leading-[25px] text-primary text-right w-full"
        >
          ویرایش آدرس ایمیل &#8598;
        </button>
      </div>
    </CustomCardContainer>
  );
}

export default EmailConfirmation;
