import CustomButton from "@/components/ui/CustomButton";
import { Flex } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// TODO:validation

function PublisherDocumentsForm() {
  return (
    <Formik
      initialValues={{
        idCardImage: "",
        logoImage: "",
      }}
      validationSchema={Yup.object({
        idCardImage: Yup.mixed().required("وارد کردن عکس کارت ملی الزامی است."),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-y-[30px]">
          <Flex justifyContent="space-between" columnGap="20px">
            <Flex
              flexDir="column"
              justifyContent="space-between"
              columnGap="20px"
            >
              <Flex alignItems="center" columnGap="8px">
                <p className="text-[20px] font-semibold">عکس کارت ملی</p>{" "}
                <p className="text-[12px] font-light text-error">
                  <ErrorMessage name="idCardImage" />
                </p>
              </Flex>

              {formik.values.idCardImage && (
                <img
                  className="w-[346px] h-[346px] object-fill"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Identity_card_of_the_State_of_Califorinia%2C_sample_%282010%29.jpg/640px-Identity_card_of_the_State_of_Califorinia%2C_sample_%282010%29.jpg"
                ></img>
              )}
              {!formik.values.idCardImage && (
                <label
                  htmlFor="idCardImage"
                  className={`cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed  text-black text-center ${
                    formik.errors.idCardImage
                      ? "outline-error"
                      : "outline-[#C8C8C8]"
                  }`}
                >
                  <p className="text-[20px] font-semibold leading-[24px]">
                    برای آپلود کلیک کنید.
                  </p>
                  <p className="text-[14px] font-medium leading-[24px]">
                    (حداکثر 8 مگابایت)
                  </p>
                </label>
              )}
              <Field
                id="idCardImage"
                name="idCardImage"
                type="file"
                className="hidden"
              />
            </Flex>
            <Flex flexDir="column" rowGap="8px">
              <p className="text-[20px] font-semibold">
                عکس لوگو<span className="text-[#C8C8C8]"> (اختیاری)</span>
              </p>
              <label
                htmlFor="logoImage"
                className=" cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed outline-[#C8C8C8]  text-black text-center"
              >
                <p className="text-[20px] font-semibold leading-[24px]">
                  برای آپلود کلیک کنید.
                </p>
                <p className="text-[14px] font-medium leading-[24px]">
                  (حداکثر 8 مگابایت)
                </p>{" "}
              </label>
              <Field
                id="logoImage"
                name="logoImage"
                type="file"
                className="hidden"
              />
            </Flex>
          </Flex>
          <CustomButton type="submit">ادامه</CustomButton>
        </Form>
      )}
    </Formik>
  );
}

export default PublisherDocumentsForm;
