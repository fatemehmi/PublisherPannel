import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomButton from "../../../ui/CustomButton";
import CustomInput from "../../../ui/CustomInput";
import CustomInputLabel from "@/components/ui/CustomInputLabel";
import CustomPassInput from "@/components/ui/CustomPassInput";
import validatePass from "@/helpers/validatePass";
import useSendUserSignupInfo from "@/react-query/hooks/useSendUserSignupInfo";

function GetUserInfoForm(props) {

  const{mutate,isLoading,error}=useSendUserSignupInfo()

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        passwordConf: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string().required("وارد کردن نام کاربری اجباری است.").min(3,"نام کاربری باید حداقل 3 کاراکتر داشته باشد.").matches(/^((?!@).)*$/,"نام کاربری نباید شامل @ باشد."),
        password:Yup.string().required("وارد کردن رمز عبور اجباری است."),
        passwordConf: Yup.string().required("وارد کردن تکرار رمز عبور اجباری است.")
     .oneOf([Yup.ref('password'), null], 'رمز عبور و تکرار آن یکسان نیستند.')
      })}
      onSubmit={(values, { setSubmitting }) => {
          mutate({
             username:values.username,
             email:props.email,
             password:values.password,
             password2:values.passwordConf
          });
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

export default GetUserInfoForm;
