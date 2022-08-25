import { useState } from "react"
import Image from "next/image"
import sass from "./styles/page.module.scss"

// props: title, description, img, alt, embed, style, id
export default function PageTransitionEvent(props){

    const [showPage, setShowPage] = useState(false)

    return (
        <>
        <div className={sass.div__pagelabel_wrap} onClick={ ()=> setShowPage(true)} id={props.id} style={props.style}>
            <div className={sass.div__pagelabel_data}>
                <h3>{props.title}</h3>
                <hr/>
                <p>{props.description}</p>
            </div>
            {
                props.img &&
                <div className={sass.div__pagelabel_img}>
                <span className={sass.span__pagelabel_img}>
                    
                    <Image src={props.img} alt={props.alt || "Image not found"}  />
                </span>
            </div>
            }
        </div>

        {
            showPage &&
            <div className={sass.div__page_wrap} onClick={ e => e.target.className === sass.div__page_wrap && setShowPage(false)}>
                <div className={sass.div__page_content}>
                    <span className={sass.span__page_close} onClick={ ()=> setShowPage(false)}><span>+</span></span>
                    {props.children || props.embed}
                </div>
            </div>
        }
        </>
    )
}