import { Button } from "@chakra-ui/react";

function CustomButton(props) {
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      bgColor="primary"
      color="white"
      rounded="16px"
      height="49px"
      fontWeight="normal"
      fontSize="16px"
      lineHeight="24px"
      _hover={{ background: "primary" }}
      className="text-center px-[8px] py-[12px]"
    >
      {props.children}
    </Button>
  );
}

export default CustomButton;
