import {title4 as className} from "./styles/titles.module.scss"

export default function Title4(props){
    return (
        <>
            <h4 className={className} style={props.style} id={props.id}>{props.children || props.text}</h4>
        </>
    )
}