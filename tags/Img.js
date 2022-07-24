import sass, {image as className} from "./styles/image.module.scss"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Img(props){

    const [zoom, setZoom] = useState(false)
    const [img, setImg] = useState(null)
    const [caption, setCaption] = useState(null)

    useEffect(()=>{
        setImg( 
            typeof props.img === "string" ?
                props.height && props.width ?
                    <Image src={props.img} alt={props.alt} height={props.height} width={props.width} objectFit="contain"/>
                    :
                    <Image src={props.img} alt={props.alt} layout="fill" objectFit="contain"/>
                :
                <Image src={props.img} alt={props.alt} {...props.img} objectFit="contain"/>
        )

        setCaption(
            props.caption ?
                <div className={sass.caption}>
                    <span>{props.caption}</span>
                </div>:
                ""
        )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className={className} style={props.style} id={props.id} title={props.title} onClick={()=>setZoom(true)}>
                {img}
            </div>
            {
                zoom &&
                <div className={sass.div__zoom_wrap} onClick={ e => e.target.className === sass.div__zoom_wrap && setZoom(false)}>
                    <div className={sass.div__zoomImage}>
                        {img}
                    </div>
                    { props.hideCaption || <span><i>{props.title || props.alt}</i></span> }
                    
                </div>
            }
        </>
    )
}