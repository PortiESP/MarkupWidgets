import {title as className} from "./styles.module.scss"

export default function Title(props){
    return (
        <>
            <h1 className={className} style={props.style} id={props.id}>{props.children || props.text}</h1>
        </>
    )
}