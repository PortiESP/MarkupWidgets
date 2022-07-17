import {ulist as className} from "./styles.module.scss"

export default function UList(props){
    return (
        <>
            <ul className={className} style={props.style}>
                {props.items.map( (item, i) => <li key={i} style={props.itemStyle}>{item}</li>)}
            </ul>
        </>
    )
}