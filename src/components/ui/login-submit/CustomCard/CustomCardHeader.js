import { CardHeader } from "@chakra-ui/react"

function CustomCardHeader(props){
    return(
        <CardHeader fontWeight='bold' fontSize='24px' lineHeight='40px' color='primary' textAlign='right' padding="0">{props.children}</CardHeader>
    )
}

export default CustomCardHeader