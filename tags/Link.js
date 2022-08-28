import {link as className} from "./styles/link.module.scss"


export default function Link(props){

    return <a className={className} target={props.target} rel="noreferrer" href={props.href || "#"} style={props.style} id={props.id} title={props.title}>{props.children || props.text}</a>
}