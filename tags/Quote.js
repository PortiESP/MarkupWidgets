
import {quote as className} from "./styles.module.scss"

export default function Quote(props){

    return (
        <>
            <div className={className} style={ props.style}>
                <span>{props.title}</span>
                <p>{props.children || props.text}</p>
            </div>
        </>
    )
}