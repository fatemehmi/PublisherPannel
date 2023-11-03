import Link from "next/link"
import { Flex } from "@chakra-ui/react"

function CustomCardLink(props){
    return(
        <Flex justifyContent='flex-end'>
            <Link href={props.href} className="font-normal text-[16px] leading-[25px] text-primary text-right w-full ">{props.children} &#8598;</Link>
        </Flex>
        
    )
}

export default CustomCardLink