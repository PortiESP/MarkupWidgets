import sass from "./styles/image.module.scss"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Img(props){

    const [zoom, setZoom] = useState(false)
    const [img, setImg] = useState(null)
    const router = useRouter()

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


    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className={sass.image} style={{ height: props.height, ...props.style}} id={props.id} title={props.title} onClick={()=>setZoom(true)}>
                {img}
            </div>
            {
                zoom &&
                <div className={sass.div__zoom_wrap} onClick={ e => e.target.className === sass.div__zoom_wrap && setZoom(false)}>
                    <div className={sass.div__zoomImage} onClick={ () => props.href && router.push(props.href)}>
                        <Image src={props.img} alt={props.alt} layout="fill" objectFit="contain"/>
                    </div>
                    { props.hideCaption || !props.caption || <span><i>{props.title || props.alt}</i></span> }
                    
                </div>
            }
        </>
    )
}