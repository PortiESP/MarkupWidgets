import {title2 as className} from "./styles.module.scss"

export default function Title2(props){
    return (
        <>
            <h2 className={className} style={props.style} id={props.id}>{props.children || props.text}</h2>
        </>
    )
}