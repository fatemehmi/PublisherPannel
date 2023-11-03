import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomButton from "../../ui/CustomButton";
import CustomInput from "../../ui/CustomInput";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomInputLabel from "@/components/ui/CustomInputLabel";
import { useState } from "react";

function PublisherSignupForm(props) {
  return (
    <Formik
      initialValues={{
        commericalName: "",
        phoneNumber: "",
        city: "",
        street: "",
        moreAddressInfo: "",
      }}
      validationSchema={Yup.object({
        commericalName: Yup.string().required(
          "وارد کردن نام تجاری اجباری است."
        ),
        phoneNumber: Yup.string().required("وارد کردن شماره تلفن اجباری است."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          props.setStep(2)
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[10px]">

          <CustomInputLabel htmlFor="commericalName">نام تجاری</CustomInputLabel>
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
          <CustomCardHeader>آدرس</CustomCardHeader>

          <CustomInputLabel htmlFor="city">
            شهر <span className="text-gray-400"> (اختیاری)</span>
          </CustomInputLabel>
          <CustomInput name="city" type="text" />
          <CustomInputLabel htmlFor="street" >
            خیابان<span className="text-gray-400"> (اختیاری)</span>
          </CustomInputLabel>
          <CustomInput name="street" type="text" />
          <CustomInputLabel htmlFor=" moreAddressInfo">
          کوچه/ساختمان/پلاک<span className="text-gray-400"> (اختیاری)</span>
          </CustomInputLabel>
          <CustomInput name="moreAddressInfo" type="text" />
          <CustomButton type="submit">ادامه</CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default PublisherSignupForm;
