import {br} from "./styles/br.module.scss"

// props.

export default function Br(props){
    return (
        <div className={br} style={{height: props.spacing && `${props.spacing}px` || "50px"}} id={props.id}>
            <br />
        </div>
    )
}