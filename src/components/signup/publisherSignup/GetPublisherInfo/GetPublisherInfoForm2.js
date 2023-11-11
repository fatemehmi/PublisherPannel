import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomButton from "../../../ui/CustomButton";
import CustomInput from "../../../ui/CustomInput";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomInputLabel from "@/components/ui/CustomInputLabel";
import { Input } from "@chakra-ui/react";

function GetPublisherInfoForm2(props) {

  const cardNumberHandler=(e)=>{

    if(e.target.value.length%4===0){
      e.target.value=e.target.value+" "
    }
  }

  return (
    <Formik
      initialValues={{
        commericalName: "",
        phoneNumber: "",
        cardNumber: "",
        city: "",
        street: "",
        moreAddressInfo: "",
      }}
      validationSchema={Yup.object({
        commericalName: Yup.string().required(
          "وارد کردن نام تجاری اجباری است."
        ).min(3,"نام تجاری باید حداقل 3 کاراکتر داشته باشد."),
        phoneNumber: Yup.string().required("وارد کردن شماره تلفن اجباری است.").matches(/^09\d{9}$/,"شماره تلفن باید با 09 شروع شده و دارای 11 رقم باشد."),
        cardNumber:Yup.string().required("وارد کردن شماره کارت اجباری است.").min(16,"شماره کارت 16 رقمی است."),
      })}
      onSubmit={(values, { setSubmitting }) => {
          props.setCommericalName(values.commericalName);
          props.setPhoneNumber(values.phoneNumber)
          props.setCardNumber(values.cardNumber);
          props.setAddress(
            values.city + values.street + values.moreAddressInfo
          );
          props.setStep(3);
          setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[10px]">
          <CustomInputLabel htmlFor="commericalName">
            نام تجاری
          </CustomInputLabel>
          <CustomInput
            name="commericalName"
            type="text"
            validation={true}
            error={formik.errors.commericalName}
            touched={formik.touched.commericalName}
          />

          <CustomInputLabel htmlFor="phoneNumber">شماره تلفن</CustomInputLabel>
          <CustomInput
            name="phoneNumber"
            type="tel"
            validation={true}
            error={formik.errors.phoneNumber}
            touched={formik.touched.phoneNumber}
          />
          <CustomInputLabel htmlFor="cardNumber">شماره حساب</CustomInputLabel>
          <CustomInput
            name="cardNumber"
            type="string"
            validation={true}
            error={formik.errors.cardNumber}
            touched={formik.touched.cardNumber}
            className="ltr"
          />
          <CustomCardHeader>آدرس</CustomCardHeader>

          <CustomInputLabel htmlFor="city">
            شهر <span className="text-gray-400"> (اختیاری)</span>
          </CustomInputLabel>
          <CustomInput
            name="city"
            type="text"
          />
          <CustomInputLabel htmlFor="street">
            خیابان<span className="text-gray-400"> (اختیاری)</span>
          </CustomInputLabel>
          <CustomInput
            name="street"
            type="text"
          />
          <CustomInputLabel htmlFor=" moreAddressInfo">
            کوچه/ساختمان/پلاک<span className="text-gray-400"> (اختیاری)</span>
          </CustomInputLabel>
          <CustomInput
            name="moreAddressInfo"
            type="text"
          />
          <CustomButton type="submit">ادامه</CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default GetPublisherInfoForm2;
