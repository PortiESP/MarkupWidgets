import {title3 as className} from "./styles.module.scss"

export default function Title3(props){
    return (
        <>
            <h3 className={className} style={props.style} id={props.id}>{props.children || props.text}</h3>
        </>
    )
}