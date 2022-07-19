import {paragraph as className} from "./styles.module.scss"

export default function Paragraph(props){
    return (
        <>
            <p className={className} style={props.style} id={props.id}>{props.children || props.text}</p>
        </>
    )
}