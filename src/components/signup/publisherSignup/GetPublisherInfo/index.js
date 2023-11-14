import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import GetPublisherInfoForm1 from "./GetPublisherInfoForm1";
import GetPublisherInfo2 from "@/components/signup/publisherSignup/GetPublisherInfo/GetPublisherInfo2";
import PublisherDocuments from "@/components/signup/publisherSignup/GetPublisherInfo/PublisherDocuments";
import { useState } from "react";

function GetPublisherInfo(props) {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 && (
        <CustomCardContainer roundedTop="20px">
          <CustomCardHeader>
            <p>اطلاعات ناشر</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            اطلاعات زیر را می‌توانید پس از ساخت حساب، در پنل کاربری{" "}
            <span className="text-primary">ویرایش</span> کنید.
          </CustomCardParagraph>
          <GetPublisherInfoForm1
            email={props.email}
            setStep={setStep}
          />
        </CustomCardContainer>
      )}

      {step === 2 && (
        <GetPublisherInfo2
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <PublisherDocuments
        />
      )}
    </>
  );
}

export default GetPublisherInfo;
