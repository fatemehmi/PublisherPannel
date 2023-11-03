function CustomInputLabel(props){
    return(
        <label
        htmlFor={props.htmlFor}
        className="text-[16px] font-bold leading-[25px] text-right"
      >
        {props.children}
      </label>
    )
}

export default CustomInputLabel