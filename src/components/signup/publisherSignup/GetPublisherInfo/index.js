import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import GetPublisherInfoForm1 from "./GetPublisherInfoForm1";
import GetPublisherInfo2 from "@/components/signup/publisherSignup/GetPublisherInfo/GetPublisherInfo2";
import PublisherDocuments from "@/components/signup/publisherSignup/GetPublisherInfo/PublisherDocuments";
import { useState } from "react";

function GetPublisherInfo(props) {
  const [step, setStep] = useState(1);
  const [username,setUsername]=useState()
  const [password,setPassword]=useState()
  const [passwordConf,setPasswordConf]=useState()
  const [commericalName, setCommericalName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [cardNumber, setCardNumber] = useState();
  const [address, setAddress] = useState();
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
            setUsername={setUsername}
            setPassword={setPassword}
            setPasswordConf={setPasswordConf}
            setStep={setStep}
          />
        </CustomCardContainer>
      )}

      {step === 2 && (
        <GetPublisherInfo2
          setCommericalName={setCommericalName}
          setPhoneNumber={setPhoneNumber}
          setCardNumber={setCardNumber}
          setAddress={setAddress}
          setStep={setStep}
        />
      )}
      {step === 3 && (
        <PublisherDocuments
          email={props.email}
          username={username}
          password={password}
          passwordConf={passwordConf}
          commericalName={commericalName}
          phoneNumber={phoneNumber}
          cardNumber={cardNumber}
          address={address}
        />
      )}
    </>
  );
}

export default GetPublisherInfo;
