import { Card } from '@chakra-ui/react'

function CostumCardContainer(props){
    return(
        <Card display="flex" flexDirection="column" rowGap="16px" roundedBottom='20px' roundedTop='0' bgColor='white' minW='450px' className='px-[48px] py-[20px]'>
            {props.children}
        </Card>
    )
}

export default CostumCardContainer