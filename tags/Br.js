import {br} from "./styles/br.module.scss"

// props.

export default function Br(props){
    return (
        <div className={br} style={{height: props.height || "50px"}} id={props.id}>
            <br />
        </div>
    )
}