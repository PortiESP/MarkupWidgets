'use client'

import sass from "./styles/comment.module.scss"


export default function Comment(props){


    return (<>
        <span className={sass.span__wrap}>
            <span className={sass.span__highlight}>
                {props.children}
                <div className={sass.div__frame}>
                    <div className={sass.div__comment}>
                        <p>{props.comment}</p>
                    </div>
                </div>
            </span>
        </span>
    </>)
}