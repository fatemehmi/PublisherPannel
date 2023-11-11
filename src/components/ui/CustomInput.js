
import { Field, ErrorMessage } from "formik";
import CustomInputLabel from "./CustomInputLabel";

function CustomInput(props) {

  return (
    <div className="flex flex-col gap-y-[8px]">
      {props.validation ? (
        <>
        <Field
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          className={`h-[51px] border-[2px] border-primary rounded-2xl px-[20px] py-[16px] focus:outline-none ${props.className} ${
            props.error&&props.touched ? "border-red-500" : ""
          }`}
        />
        <p
        className={`text-[12px] font-light ${props.error&&props.touched ? "text-error" : ""}`}
      >
        <ErrorMessage name={props.name} />
      </p>
        </>
      ) : (
        <Field
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          className={`h-[51px] border-[2px] border-primary rounded-2xl px-[20px] py-[16px] focus:outline-none ${props.className} ${
            props.error&&props.touched ? "border-red-500" : ""
          }`}
        />
      )}

    </div>
  );
}

export default CustomInput;
