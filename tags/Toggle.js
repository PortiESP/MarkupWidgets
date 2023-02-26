'use client'

import sass, {toggle as className} from "./styles/toggle.module.scss"
import { useState } from "react"
export default function Toggle(props){

    const [showContent, setShowContent] = useState(false)

    return (
        <>
        <style jsx="true">{`
            .${sass.toggle}{
                ${props.background && `background: ${props.background};`}
            }
            .${sass.div__header}:hover{
                ${props.backgroundHover && `background: ${props.backgroundHover};` || "background: #444e;"}
            }
            .${sass.div__button}{
                ${props.arrowColor && `background-color: ${props.arrowColor};`}
                ${props.arrowSize && `width: ${props.arrowSize};`}
                ${props.arrowSize && `height: ${props.arrowSize};`}
            }
            .${sass.div__title}{
                ${props.color && `color: ${props.color};`}
                ${props.fontSize && `font-size: ${props.fontSize};`}
            }
        `}</style>
        <div className={className} style={props.style} id={props.id}>
            <div className={sass.div__header} onClick={()=>setShowContent( last => !last)}>
                <div className={[sass.div__button, showContent&&sass.opened].join(" ")}></div>
                <div className={sass.div__title}><span className={sass.span_title}>{props.title}</span></div>
            </div>
            {
                showContent && 
                <div className={sass.div__content}>
                    {props.children}
                </div>
            }
        </div>
        </>
    )
}