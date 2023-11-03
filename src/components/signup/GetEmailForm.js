import { Formik,Form} from "formik";
import * as Yup from "yup";
import CustomButton from "../ui/CustomButton";
import CustomInput from "../ui/CustomInput";
import CustomInputLabel from "@/components/ui/CustomInputLabel";

function GetEmailForm(props) {

  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("لطفا آدرس ایمیل معتبر وارد کنید.").required("وارد کردن ایمیل اجباری است."),
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
        <Form className="flex flex-col gap-y-[16px]">
          <div className="flex flex-col gap-y-[8px]">
            <CustomInputLabel htmlFor="email">ایمیل</CustomInputLabel>
          <CustomInput
            name="email"
            type="email"
            placeholder="مثال: abc@example.com"
            validation={true}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          </div>
          <CustomButton type="submit">ادامه</CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default GetEmailForm;
