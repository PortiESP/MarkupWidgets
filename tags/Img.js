import {image as className, imgNoDims} from "./styles.module.scss"
import Image from "next/image"

export default function Code(props){
    return (
        <>
            <div className={className} style={props.style} id={props.id}>
                {
                    typeof props.img === "string"
                    ?
                    props.height && props.width ?
                        <Image src={props.img} alt={props.alt} height={props.height} width={props.width} objectFit="contain"/>
                        :
                        <Image src={props.img} alt={props.alt} layout="fill" objectFit="contain"/>
                    :
                    <Image src={props.img} alt={props.alt} {...props.img} objectFit="contain"/>
                }
            </div>
        </>
    )
}