import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import GetUserInfoForm from "./GetUserInForm";

function GetUserInfo(props){
    return (
        <CustomCardContainer roundedTop="20px">
          <CustomCardHeader>
            <p>اطلاعات کاربر</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            اطلاعات زیر را می‌توانید پس از ساخت حساب، در پنل کاربری{" "}
            <span className="text-primary">ویرایش</span> کنید.
          </CustomCardParagraph>
          <GetUserInfoForm email={props.email} verifyCode={props.verifyCode}/>
        </CustomCardContainer>
      );
}

export default GetUserInfo