import {block} from "./styles/block.module.scss"


export default function Block(props){
    return (
        <div className={block} style={{...props.style, background: props.background}} id={props.id}>
            {props.children}
        </div>
    )
}