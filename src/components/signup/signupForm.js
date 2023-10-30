import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";

function SignupForm() {
  return (
    <Formik
      initialValues={{
        email: "",
        username: "",
        password: "",
        passwordConf: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        username: Yup.string()
          .required("Required")
          .min(3, "نام کاربری باید حداقل سه کاراکتر داشته باشد."),
        password:Yup.string().min(3)
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[10px]">
          <CustomInput
            label="ایمیل"
            name="email"
            type="email"
            placeholder="مثال: abc@example.com"
            error={formik.errors.email}
          />
          <CustomInput
            label="نام کاربری"
            name="username"
            type="text"
            placeholder="مثال: sara"
            error={formik.errors.username}
          />
          <CustomInput
            label="رمز عبور"
            name="password"
            type="password"
            placeholder="مثال: Sara78$"
            error={formik.errors.password}
          />
          <CustomInput
            label="تکرار رمز عبور"
            name="passwordConf"
            type="password"
            placeholder="مثال: Sara78$"
            error={formik.errors.passwordConf}
          />
          <CustomButton type="submit">ادامه</CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;
