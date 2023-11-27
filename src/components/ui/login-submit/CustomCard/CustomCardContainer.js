import { Card } from '@chakra-ui/react'

function CustomCardContainer(props){
    return(
        <Card marginTop={props.marginTop} marginBottom={props.marginBottom} minW="400px" display="flex" flexDirection="column" rowGap="16px" roundedBottom='20px' roundedTop={props.roundedTop?props.roundedTop:"20px"} bgColor='white' className='px-[48px] py-[20px]'>
            {props.children}
        </Card>
    )
}

export default CustomCardContainer