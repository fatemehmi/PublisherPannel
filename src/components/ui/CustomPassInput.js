import { ErrorMessage, Field } from "formik";

function CustomPassInput(props) {


  function validatePass(pass) {
    const passLength = pass.length >= 8;
    const includeSpecialCharachter = pass.match(/!|@|\.|#|\$|\*|%|&/);
    const includeNumbers = pass.match(/\d/);
    const includeUpperCase = pass.match(/[A-Z]/);
    const includeLowerCase = pass.match(/[a-z]/);
    return [
      { title: "حداقل 8 کاراکتر", value: passLength },
      { title: "شامل اعداد", value: !!includeNumbers },
      { title: "شامل علائم مانند *, %, @ , ...", value: !!includeSpecialCharachter },
      { title: "شامل حروف بزرگ و کوچک انگلیسی", value: !!includeLowerCase&& !!includeUpperCase },
    ];
  }

  return (
    <div className="flex flex-col gap-y-[8px]">
      <Field
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={`h-[51px] border-[2px] border-primary rounded-2xl px-[20px] py-[16px] focus:outline-none ${
          props.error && props.touched ? "border-red-500" : ""
        }`}
      />
      <ul>
        { validatePass(props.value).map((field) => (
          <li
            key={field.title}
            className={`text-[12px] ${field.value ? "text-green-600" : "text-gray-400"}`}
          >
            {field.title}
          </li>
        ))}
      </ul>
      {props.validation ?(<p
        className={`text-[12px] font-light ${props.error&&props.touched ? "text-error" : ""}`}
      >
        <ErrorMessage name={props.name} />
      </p>):''}
    </div>
  );
}

export default CustomPassInput;
