import { Input, InputLeftElement } from "@chakra-ui/react";
import {
  FormHelperText,
} from "@chakra-ui/react";

import { Field, ErrorMessage } from "formik";

function CustomInput(props) {
    console.log(props.error)
  return (
    <div className="flex flex-col gap-y-[8px]">
      <label
        htmlFor={props.name}
        className="text-[16px] font-bold leading-[25px] text-right"
      >
        {props.label}
      </label>
      <Field
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={`h-[51px] border-[2px] border-primary rounded-2xl px-[20px] py-[16px] ${props.error?'border-red-500':''}`}
      />
      <p className={`text-[12px] font-light ${props.error?'text-error':''}`}><ErrorMessage name={props.name}  /></p>
      
    </div>
  );
}

export default CustomInput;
