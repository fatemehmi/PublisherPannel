import { Card } from '@chakra-ui/react'

function CustomCardContainer(props){
    return(
        <Card display="flex" flexDirection="column" rowGap="16px" roundedBottom='20px' roundedTop={props.roundedTop} bgColor='white'  className='px-[48px] py-[20px]'>
            {props.children}
        </Card>
    )
}

export default CustomCardContainer