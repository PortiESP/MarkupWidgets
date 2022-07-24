import {br} from "./styles/br.module.scss"

// props.

export default function Br(props){
    let size = props.large ? "100px": "20px"
    return (
        <div className={[br, props.small?br_small:""].join(" ")} style={{height: props.height || size}} id={props.id}>
            <br />
        </div>
    )
}