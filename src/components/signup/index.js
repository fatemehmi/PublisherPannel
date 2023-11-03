import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import GetUserEmail from "./userSignup/getUserEmail/GetUserEmail";
import GetPublisherEmail from "./publisherSignup/GetPublisherEmail/GetPublisherEmail";
import EmailConfirmation from "./emailConfirmation";
import GetUserInfo from "./userSignup/GetUserInfo";
import PublisherSignup from "./publisherSignup/publisherSignup";

function Signup() {
 
  const [role, setRole] = useState("user");
  const [step,setStep]=useState(1)

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
      >
        
        {step===1&&<div>
        <Flex alignItems="flex-end">
          <button
            onClick={() => setRole("user")}
            className={`flex-grow-[1] rounded-t-[16px] text-[24px] font-medium leading-[37.5px] px-[52px] ${
              role === "user"
                ? "bg-white text-primary py-[16px]"
                : "bg-primary text-white  py-[10px]"
            }`}
          >
            کاربر
          </button>
          <button
            onClick={() => setRole("publisher")}
            className={`flex-grow-[1] rounded-t-[16px] text-[24px] font-medium leading-[37.5px] px-[52px] ${
              role === "publisher"
                ? "bg-white text-primary py-[16px]"
                : "bg-primary text-white py-[10px]"
            }`}
          >
            ناشر
          </button>
        </Flex>
        {role==='user'&&<GetUserEmail setStep={setStep}/>}
        {role==='publisher'&&<GetPublisherEmail setStep={setStep}/>}
      </div>}
      {step===2&&<EmailConfirmation emailEditHandler={()=>setStep(1)} setStep={()=>setStep(3)}/>}
      {step===3&&role==='user'&&<GetUserInfo/>}
      {step===3&&role==='publisher'&&<PublisherSignup/>}
    </main>
  );
}

export default Signup;
