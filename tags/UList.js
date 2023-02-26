'use client'

import {ulist as className} from "./styles/ul.module.scss"

export default function UList(props){
    return (
        <>
            <style jsx="true">{`
                .${className}{
                    ${props.bulletColor && `--bulletColor:${props.bulletColor};`}
                }
            `}</style>
            <ul className={className} style={props.style} id={props.id}>
                {props.items.map( (item, i) => <li key={i} style={props.itemStyle}>{item}</li>)}
            </ul>
        </>
    )
}