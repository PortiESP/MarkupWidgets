'use client'

import sass from "./styles/image.module.scss"
import Image from "next/image"
import { useState } from "react"


export default function Img(props){

    const [zoom, setZoom] = useState(false)

    const img = <Image 
                    src={props.img} 
                    alt={props.alt || props.title}
                    title={props.title}
                    height={props.height} 
                    width={props.width} 
                    layout="fill" 
                    objectFit="contain"
                />

    return (
        <>
            <div className={sass.div__image} style={{ aspectRatio: props.ratio, ...props.style}} id={props.id} title={props.title} onClick={()=>setZoom(true)}>
                {img}
                { !props.hideCaption && <span className={sass.span__caption}>{props.title}</span> }
            </div>

            {
                zoom &&
                <div className={sass.div__zoom_wrap} onClick={()=>setZoom(false)}>
                    <div className={sass.div__zoom_image} style={{aspectRatio: props.ratio}}>
                        {img}
                        { !props.hideCaption && <span className={sass.span__caption}>{props.title}</span> }
                    </div>
                </div>
            }
            
        </>
    )
}