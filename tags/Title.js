import {title, title2, title3, title4} from "./styles/title.module.scss"


export default function Title(props){
    return (
        <>
            <style jsx="true">{`h1{background: ${props.background}}`}</style>
            <h1 className={title} style={props.style} id={props.id}>{props.children || props.text}</h1>
        </>
    )
}

export function Title2(props){
    return (
        <>
            <style jsx="true">{`h2{background: ${props.background}}`}</style>
            <h2 className={title2} style={props.style} id={props.id}>{props.children || props.text}</h2>
        </>
    )
}

export function Title3(props){
    return (
        <>
            <style jsx="true">{`h3{background: ${props.background}}`}</style>
            <h3 className={title3} style={props.style} id={props.id}>{props.children || props.text}</h3>
        </>
    )
}

export function Title4(props){
    return (
        <>
            <style jsx="true">{`h4{background: ${props.background}}`}</style>
            <h4 className={title4} style={props.style} id={props.id}>{props.children || props.text}</h4>
        </>
    )
}