import {link as className, a__wrap} from "./styles/link.module.scss"
import NLink from "next/link"

export default function Link(props){

    return <NLink className={className} target={props.target} href={props.href || "#"} id={props.id} title={props.title} style={props.style}><a className={a__wrap}>{props.children || props.text}</a></NLink>
}