import { Card } from '@chakra-ui/react'

function CustomCardContainer(props){
    return(
        <Card minH={props.height} marginTop={props.marginTop} marginBottom={props.marginBottom} rowGap="16px" roundedBottom='16px' roundedTop="16px" bgColor='white' className={`px-[20px] pt-[35px]`}>
            {props.children}
        </Card>
    )
}

export default CustomCardContainer