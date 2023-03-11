
import {quote as className} from "./styles/quote.module.scss"

export default function Quote(props){

    return (
        <>
            <div className={className} style={{...props.style, "--color": props.color}} id={props.id}>
                {props.title && <h4>{props.title}</h4>}
                <div>{props.children || props.text}</div>
            </div>
        </>
    )
}