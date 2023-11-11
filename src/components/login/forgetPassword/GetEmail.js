import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import GetEmailForm from "@/components/signup/GetEmailForm";
import Link from "next/link";

function GetEmail(props){
    return(
        <CustomCardContainer roundedTop='20px'>
          <CustomCardHeader>
            <p>فراموشی رمز عبور</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            ایمیل حساب کاربری خود را وارد کنید.
          </CustomCardParagraph>
          <GetEmailForm setStep={props.setStep} emailValue={props.emailValue} setEmailValue={props.setEmailValue} endpoint="send-resetpassword-code"/>
        </CustomCardContainer>
    )
}

export default GetEmail