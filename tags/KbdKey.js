

import sass from "./styles/kbdkey.module.scss"

export default function KdbKey(props){

    return (<>
        <span className={sass.span__wrap} id={props.id}>
            <span className={sass.span__key} style={props.style}>
                <span className={sass.span__title}>{props.children || props.title}</span>
            </span>
        </span>
    </>)
}