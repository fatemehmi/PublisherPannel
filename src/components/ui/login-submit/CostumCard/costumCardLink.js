import Link from "next/link"

function CustomCardLink(props){
    return(
        <div className="flex justify-end">
            <Link href={props.href} className="font-normal text-[16px] leading-[25px] text-primary text-right w-full ">{props.children} &#8598;</Link>
        </div>
        
    )
}

export default CustomCardLink