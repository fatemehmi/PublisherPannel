import { Formik, Form } from "formik";
import * as Yup from "yup";

import CustomButton from "@/components/ui/CustomButton";
import CustomInput from "@/components/ui/CustomInput";
import CustomInputLabel from "@/components/ui/CustomInputLabel";
import CustomPassInput from "@/components/ui/CustomPassInput";
import validatePass from "@/helpers/validatePass";
import useSendResetPasswordInfo from "@/react-query/hooks/useSendResetPasswordInfo";

function ResetPasswordForm(props) {

  const{mutate,isLoading,error}=useSendResetPasswordInfo()

  return (
    <Formik
      initialValues={{
        password: "",
        passwordConf: "",
      }}
      validationSchema={Yup.object({
        password:Yup.string().required("وارد کردن رمز عبور اجباری است."),
        passwordConf: Yup.string().required("وارد کردن تکرار رمز عبور اجباری است.")
     .oneOf([Yup.ref('password'), null], 'رمز عبور و تکرار آن یکسان نیستند.')
      })}
      onSubmit={(values, { setSubmitting }) => {
          mutate({
             email:props.email,
             activation_code:props.verifyCode,
             password:values.password,
             password2:values.passwordConf
          });
          setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[10px]">
          <CustomInputLabel htmlFor="password">رمز عبور جدید</CustomInputLabel>
          <CustomPassInput
            value={formik.values.password}
            error={formik.errors.password}
            touched={formik.touched.password}
            name="password"
            type="password"
            validation="true"
          />
          <CustomInputLabel htmlFor='passwordConf'>تکرار رمز عبور جدید</CustomInputLabel>
          <CustomInput
            name="passwordConf"
            type="password"
            validation={true}
            error={formik.errors.passwordConf}
            touched={formik.touched.passwordConf}
          />
          <CustomButton isDisable={!(validatePass(formik.values.password).every(el=>el.value))} type="submit" >ادامه</CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default ResetPasswordForm;
