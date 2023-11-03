import { Text } from "@chakra-ui/react"

function CustomCardParagraph(props){
    return(
        <Text fontWeight='medium' fontSize='16px' lineHeight='25px' textAlign='right' >{props.children}</Text>
    )
}
export default CustomCardParagraph