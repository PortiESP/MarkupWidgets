import { useEffect } from "react"
import sass from "./styles/url.module.scss"

export default function Url(props){

    return (
        <div className={sass.div__url_wrap} onClick={ ()=> window.location.href = props.src}>
            <div className={sass.div__url_data}>
                <div className={sass.div__data_title}>{props.title}</div>
                <div className={sass.div__data_description}>{props.description}</div>
                <div className={sass.div__data_src}>{props.src}</div>
            </div>
            <div className={sass.div__url_embed}>
                <iframe 
                    src={props.src}
                    scrolling="no"
                    title={"Embeded URL: " + props.src}
                />
            </div>
        </div>
    )
}