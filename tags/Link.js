import {link as className} from "./styles/link.module.scss"


export default function Link(props){

    return <a className={className} href={props.href || "#"} style={props.style} id={props.id} title={props.title}>{props.children || props.text}</a>
}