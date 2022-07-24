import sass, {button_wrap as className} from "./styles/button.module.scss"
import Image from "next/image"

export default function Button(props){

    return (
        <>
            <style jsx="true">{`

                .${sass.button}{
                    ${props.borderRadius && `border-radius: ${props.borderRadius};`}
                    ${props.background && `background: ${props.background};`}
                }

                .${sass.button}:hover{${props.styleHover}}
                .${sass.button}:active{${props.styleActive}}
                
                .${sass.div__image}{
                    ${props.iconScale && `transform: scale(${props.iconScale});`}
                    ${props.iconInvert && `filter: invert(${props.iconInvert});`}
                    ${props.iconBackground && `background: ${props.iconBackground};`}
                }

                .${sass.div__text}{
                    ${props.fontSize && `font-size: ${props.fontSize};`}
                    ${props.color && `color: ${props.color};`}
                }

            `}</style>

            <div className={className} style={props.style} id={props.id} onClick={props.callback}>
                
                <div className={sass.button} style={props.styleButton}>
                    { props.icon && 
                    <div className={sass.div__image} style={props.styleIcon}>
                        <Image src={props.icon} alt="Button icon" layout="fill" objectFit="contain"/>
                    </div>
                    }
                    <div className={sass.div__text} style={props.styleText}>
                        <span>{props.children || props.text}</span>
                    </div>
                </div>
            </div>
        </>
    )
}