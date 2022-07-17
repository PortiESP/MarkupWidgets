import {image as className} from "./styles.module.scss"
import Image from "next/image"

export default function Code(props){
    return (
        <>
            <div className={className} style={props.style}>
                <Image src={props.img} alt={props.alt} {...props.img} objectFit="contain"/>
            </div>
        </>
    )
}