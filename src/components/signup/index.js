<<<<<<< HEAD
import CustomCardContainer from "@/components/ui/login-submit/CostumCard/CostumCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CostumCard/CostumCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CostumCard/CostumCardParagraph";
import CustomCardLink from "@/components/ui/login-submit/CostumCard/costumCardLink";
import CustomButton from "@/components/ui/CustomButton";
import CustomInput from "@/components/ui/CustomInput";
import Link from "next/link";
import { useState } from "react";
import SignupForm from "./signupForm";

function Signup() {
  const [role, setRole] = useState("user");
=======
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
>>>>>>> Atefeh

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24`}
<<<<<<< HEAD
    >
      <div>
        <div className="flex items-end">
=======
      >
        
        {step===1&&<div>
        <Flex alignItems="flex-end">
>>>>>>> Atefeh
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
<<<<<<< HEAD
        </div>

        <CustomCardContainer>
          <CustomCardHeader>
            <p>{role==="user"?"کاربر":"ناشر"} عزیز،</p>
            <p> به بوکلند خوش اومدی :)</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            برای ساخت <span className="text-primary">حساب شخصی</span> ،اطلاعات
            خود را وارد کنید.
          </CustomCardParagraph>
          <SignupForm/>
          <p className="font-medium text-[12px] leading-[18.75px] text-black text-right">
            {" "}
            ثبت نام در بوکلند به معنی موافقت با{" "}
            <Link
              href="/rules"
              className="text-primary underline underline-offset-4"
            >
              شرایط استفاده از بوکلند{" "}
            </Link>{" "}
            است.
          </p>
          <CustomCardLink href={"/login"}>
            قبلا در بوکلند حساب کاربری داشتم
          </CustomCardLink>
        </CustomCardContainer>
      </div>
=======
        </Flex>
        {role==='user'&&<GetUserEmail setStep={setStep}/>}
        {role==='publisher'&&<GetPublisherEmail setStep={setStep}/>}
      </div>}
      {step===2&&<EmailConfirmation emailEditHandler={()=>setStep(1)} setStep={()=>setStep(3)}/>}
      {step===3&&role==='user'&&<GetUserInfo/>}
      {step===3&&role==='publisher'&&<PublisherSignup/>}
>>>>>>> Atefeh
    </main>
  );
}

export default Signup;
