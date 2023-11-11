import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import ResetPasswordForm from '@/components/login/forgetPassword/ResetPasswordForm'

function ResetPassword(props){
    return (
        <CustomCardContainer roundedTop="20px">
          <CustomCardHeader>
            <p>تغییر رمز عبور</p>
          </CustomCardHeader>
          <ResetPasswordForm email={props.email} verifyCode={props.verifyCode}/>
        </CustomCardContainer>
      );
}

export default ResetPassword