import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import GetPublisherInfoForm2 from "@/components/signup/publisherSignup/GetPublisherInfo/GetPublisherInfoForm2";


function GetPublisherInfo2(props) {

  return (

        <CustomCardContainer roundedTop="20px" marginTop="50px" marginBottom="50px">
          <CustomCardHeader>
            <p>مشخصات انتشارات</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            اطلاعات زیر را می‌توانید پس از ساخت حساب، در پنل کاربری{" "}
            <span className="text-primary">ویرایش</span> کنید.
          </CustomCardParagraph>
          <GetPublisherInfoForm2
            setStep={props.setStep}
          />
        </CustomCardContainer>
  );
}

export default GetPublisherInfo2