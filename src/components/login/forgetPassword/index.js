import { useState } from "react";
import GetEmail from "@/components/login/forgetPassword/GetEmail"
import EmailConfirmation from "@/components/signup/emailConfirmation";
import GetUserInfo from "@/components/signup/userSignup/getUserInfo";
import GetPublisherInfo from '@/components/signup/publisherSignup/GetPublisherInfo'
import ResetPassword from "@/components/login/forgetPassword/ResetPassword";

function ForgetPassword() {
  const [step, setStep] = useState(1);
  const [emailValue, setEmailValue] = useState(null);
  const [verifyCode,setVerifyCode]=useState()
  
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center`}
    >
      {step === 1 && (
        <div>
            <GetEmail
              emailValue={emailValue}
              setEmailValue={setEmailValue}
              setStep={setStep}
            />
        </div>
      )}
      {step === 2 && (
        <EmailConfirmation
          email={emailValue}
          setVerifyCode={setVerifyCode}
          emailEditHandler={() => setStep(1)}
          setStep={() => setStep(3)}
        />
      )}
      {step === 3 && 
        <ResetPassword
          email={emailValue}
          verifyCode={verifyCode}
        />
      }
    </main>
  );
}

export default ForgetPassword;