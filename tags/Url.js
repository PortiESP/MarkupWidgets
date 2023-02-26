'use client'

import sass from "./styles/url.module.scss"
import icon from "../assets/icons/enlace.png"
import Image from "next/image"
import Link from "next/link"

export default function Url(props){

    return (
        <a className={sass.a__wrap} href={props.src} rel="noreferrer" target={props.target}>
            <div className={sass.div__url_wrap} style={props.style} id={props.id}>
                <div className={sass.div__url_data}>
                    <div className={sass.div__data_title}>
                        <span>🌐 {props.title}</span>
                        <div className={sass.div__title_img} onClick={ e => {
                            e.preventDefault()
                            navigator.clipboard.writeText(props.src)
                        }}>
                            <Image src={icon} alt="link icon" layout="fill" objectFit="contain" title="Copy url" />
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
        </a>
    )
}