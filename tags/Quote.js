
import {quote as className} from "./styles.module.scss"

export default function Quote(props){

    return (
        <>
            <div className={className} style={props.style} id={props.id}>
                <h4>{props.title}</h4>
                <p>{props.children || props.text}</p>
            </div>
        </>
    )
}