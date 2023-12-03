import { Card } from "@chakra-ui/react";

function CustomCardContainer(props) {
  return (
    <Card 
    minH={props.minH?props.minH:""}
    height={props.height?props.height:""}
    width="100%"
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
      rowGap="16px"
      roundedBottom="16px"
      roundedTop="16px"
      bgColor="white"
      paddingTop={props.pt}
      paddingBottom={props.pb}
      paddingRight={props.pr}
      paddingLeft={props.pl}
      position={props.position}
      top={props.top}
    >
      {props.children}
    </Card>
  );
}

export default CustomCardContainer;
