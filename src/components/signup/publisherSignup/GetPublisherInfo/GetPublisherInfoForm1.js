import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomButton from "@/components/ui/CustomButton";
import CustomInput from "@/components/ui/CustomInput";
import CustomInputLabel from "@/components/ui/CustomInputLabel";
import CustomPassInput from "@/components/ui/CustomPassInput";
import validatePass from "@/helpers/validatePass";

function GetPublisherInfoForm1(props) {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        passwordConf: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("وارد کردن نام کاربری اجباری است.").min(3,"نام کاربری باید حداقل 3 کاراکتر داشته باشد.").matches(/^((?!@).)*$/,"نام کاربری نباید شامل @ باشد."),
        password:Yup.string().required(),
        passwordConf: Yup.string().required()
     .oneOf([Yup.ref('password'), null], 'رمز عبور و تکرار آن یکسان نیستند.')
      })}
      onSubmit={(values, { setSubmitting }) => {
          props.setUsername(values.username)
          props.setPassword(values.password)
          props.setPasswordConf(values.passwordConf)
          props.setStep(2)
          setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[10px]">
          <CustomInputLabel htmlFor="username">
            نام کاربری
          </CustomInputLabel>
          <CustomInput
            name="username"
            type="text"
            placeholder="مثال:Sara"
            validation={true}
            error={formik.errors.username}
            touched={formik.touched.username}
          />
          <CustomInputLabel htmlFor="password">رمز عبور</CustomInputLabel>
          <CustomPassInput
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
            name="password"
            type="password"
            validation="true"
          />
          <CustomInputLabel htmlFor='passwordConf'>تکرار رمز عبور</CustomInputLabel>
          <CustomInput
            name="passwordConf"
            type="password"
            validation={true}
            error={formik.errors.passwordConf}
            touched={formik.touched.passwordConf}
          />
          <CustomButton disabled={!(validatePass(formik.values.password).every(el=>el.value))} type="submit" >ادامه</CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default GetPublisherInfoForm1;
