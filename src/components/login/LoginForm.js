import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomButton from "../ui/CustomButton";
import CustomInputLabel from "@/components/ui/CustomInputLabel";
import useLogin from "@/react-query/hooks/useLogin";
import CustomInput from "../ui/CustomInput";

function LoginForm(props) {
  const { mutate, isLoading, error } = useLogin();
  return (
    <Formik
      initialValues={{
        emailOrUsername: "",
        password: "",
      }}
      validationSchema={Yup.object({
        emailOrUsername: Yup.string().required("وارد کردن ایمیل اجباری است."),
        password: Yup.string().required("وارد کردن رمز عبور اجباری است."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log(isLoading);
        // const info=values.matches(
        //     /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        // )
        mutate({
            email_or_username:values.emailOrUsername,
            password:values.password
        });
        setSubmitting(false);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[16px]">
          <div className="flex flex-col gap-y-[8px]">
            <CustomInputLabel htmlFor="emailOrUsername">
              ایمیل یا نام کاربری
            </CustomInputLabel>
            <CustomInput name="emailOrUsername" type="text" />
            <CustomInputLabel htmlFor="password">رمز عبور</CustomInputLabel>
            <CustomInput name="password" type="password" />
          </div>
          <CustomButton type="submit">
            {isLoading ? "Adding..." : "تایید"}
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
