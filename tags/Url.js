import sass from "./styles/url.module.scss"
import icon from "../assets/icons/enlace.png"
import Image from "next/image"

export default function Url(props){

    return (
        <div className={sass.div__url_wrap} onClick={ ()=> window.location.href = props.src} style={props.style} id={props.id}>
            <div className={sass.div__url_data}>
                <div className={sass.div__data_title}>
                    <span>{props.title}</span>
                    <div className={sass.div__title_img}>
                        <Image src={icon} alt="link icon" layout="fill" objectFit="contain"/>
                    </div>
                </div>
                <div className={sass.div__data_description}>{props.description}</div>
                <div className={sass.div__data_src}>{props.src}</div>
            </div>
            {
                props.img &&
                <div className={sass.div__url_img}>
                    <Image src={props.img} alt="Favicon" layout="fill" objectFit="cover"/>
                    <Image src={props.img} alt="Favicon" layout="fill" objectFit="contain"/>
                </div>
            }
        </div>
    )
}