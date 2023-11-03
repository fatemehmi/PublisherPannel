import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import CustomCardLink from "@/components/ui/login-submit/CustomCard/CustomCardLink";
import GetEmailForm from "../../GetEmailForm";
import Link from "next/link";

function GetPublisherEmail(props){
    return(
        <CustomCardContainer roundedTop='0'>
          <CustomCardHeader>
            <p>ناشر عزیز،</p>
            <p> به بوکلند خوش اومدی :)</p>
          </CustomCardHeader>
          <CustomCardParagraph>
            برای ساخت <span className="text-primary">حساب شخصی</span> ،اطلاعات
            خود را وارد کنید.
          </CustomCardParagraph>
          <GetEmailForm setStep={props.setStep}/>
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
    )
}

export default GetPublisherEmail