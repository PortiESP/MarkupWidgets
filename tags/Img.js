import sass from "./styles/image.module.scss"
import Image from "next/image"
import { useState } from "react"


export default function Img(props){

    const [zoom, setZoom] = useState(false)

    

    return (
        <>
            <div className={sass.div__image} style={{ aspectRatio: props.ratio, ...props.style}} id={props.id} title={props.title} onClick={()=>setZoom(true)}>
                <Image src={props.img} alt={props.alt || props.title} height={props.height} width={props.width} layout="fill" objectFit="contain"/>
            </div>
            
        </>
    )
}