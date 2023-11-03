import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import PublisherSignupForm from "./PublisherSignupForm";
import { useState } from "react";
import PublisherDocuments from "./PublisherDocuments";

function PublisherSignup() {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 && (
        <CustomCardContainer roundedTop="20px">
          <CustomCardHeader>
            <p>مشخصات انتشارات</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            اطلاعات زیر را می‌توانید پس از ساخت حساب، در پنل کاربری{" "}
            <span className="text-primary">ویرایش</span> کنید.
          </CustomCardParagraph>
          <PublisherSignupForm setStep={setStep} />
        </CustomCardContainer>
      )}
      {step===2&&<PublisherDocuments/>}
    </>
  );
}

export default PublisherSignup;
