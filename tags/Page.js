import { useState } from "react"
import Image from "next/image"
import sass from "./styles/page.module.scss"
import docsIcon from "../assets/icons/docs.png"

// props: title, description, style, id, small, disable
export default function PageTransitionEvent(props){

    const [showPage, setShowPage] = useState(false)

    return (
        <>
        <div className={[sass.div__pagelabel_wrap, props.small && sass.small].join(" ")} onClick={ ()=> setShowPage(true)} id={props.id} style={props.style}>
            <div className={sass.div__pagelabel_info}>
                <div className={sass.div__pagelabel_icon}>
                    <Image src={docsIcon} alt="Docs icon" layout="fill" objectFit="contain"/>
                </div>
                <div className={sass.div__pagelabel_data}>
                    <h3>{props.title}</h3>
                    <hr/>
                    { props.description && <p>{props.description}</p> }
                </div>
            </div>
            {
                !props.small &&
                <div className={sass.div__pagelabel_preview}>
                    {props.children}
                </div>
            }
        </div>

        {
            showPage &&
            <div className={sass.div__page_wrap} onClick={ e => e.target.className === sass.div__page_wrap && setShowPage(false)}>
                <div className={sass.div__page_content}>
                    <span className={sass.span__page_close} onClick={ ()=> setShowPage(false)}><span>Close</span></span>
                    <h2 className={sass.h2__page_title}>{props.title}</h2>
                    {props.children}
                </div>
            </div>
        }
        </>
    )
}