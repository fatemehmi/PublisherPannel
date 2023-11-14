import { Button } from "@chakra-ui/react";

function CustomButton(props) {
  console.log(props._before);
  return (
    <Button
      overflow="hidden"
      _before={props._before}
      type={props.type}
      onClick={props.onClick}
      isDisabled={props.disabled}
      bgColor={props.backgroundColor ? props.backgroundColor : "primary"}
      color="white"
      rounded="16px"
      height="49px"
      fontWeight="normal"
      fontSize="16px"
      lineHeight="24px"
      _hover={{ background: props.hover?.backgroundColor?props.hover.backgroundColor:"primary" }}
      className="text-center px-[8px] py-[12px]"
    >
      {props.children}
    </Button>
  );
}

export default CustomButton;
