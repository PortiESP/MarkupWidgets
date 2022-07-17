import {link as className} from "./styles.module.scss"


export default function Link(props){

    return <a className={className} href={props.href || "#"} style={props.style}>{props.children || props.text}</a>
}