import CustomButton from "@/components/ui/CustomButton";
import { Flex } from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import useSendPublisherSignupInfo from "@/react-query/hooks/useSendPublisherSignupInfo";

//ToDo:image validation

function PublisherDocumentsForm(props) {
  const [idCardImg, setIdCardImg] = useState("");
  const [logoImg, setLogoImg] = useState("");

  const { mutate, isLoading, error } = useSendPublisherSignupInfo();

  const convert2base64 = (file, setFunc) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setFunc(reader.result.toString());
    };

    reader.readAsDataURL(file);
    
  };

  const onUploadIdCardImage = (e) => {
    if (e.target.files.length > 0) {
      convert2base64(e.target.files[0], setIdCardImg);
    }
  };
  const onUploadLogoImage = (e) => {
    if (e.target.files.length > 0) {
      convert2base64(e.target.files[0], setLogoImg);
    }
  };
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
        mutate({
          username: props.username,
          email: props.email,
          password: props.password,
          password2: props.passwordConf,
          phone_number: props.phoneNumber,
          publications_name: props.commericalName,
          publications_image: values.logoImage.replace("C:\\fakepath\\",''),
          card_number: props.cardNumber,
          identity_image: values.idCardImage.replace("C:\\fakepath\\",''),
          address: props.address,
        });
        setSubmitting(false);
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
              {idCardImg ? (
                <div className="w-[346px] h-[346px]">
                  <img
                    className="w-[346px] h-[346px] object-fill"
                    src={idCardImg}
                  />
                </div>
              ) : (
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
                onChange={(e) => {
                  onUploadIdCardImage(e);
                  formik.handleChange(e);
                }}
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
              {logoImg ? (
                <div className="w-[346px] h-[346px]">
                  <img
                    className="w-[346px] h-[346px] object-fill"
                    src={logoImg}
                  />
                </div>
              ) : (
                <label
                  htmlFor="logoImage"
                  className="cursor-pointer flex flex-col gap-y-[8px] justify-center items-center w-[342px] h-[342px] bg-[#C8C8C878] outline-[4px] outline-dashed outline-[#C8C8C8]  text-black text-center"
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
                onChange={(e) => {
                  onUploadLogoImage(e);
                  formik.handleChange(e);
                }}
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
