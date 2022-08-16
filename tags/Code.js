import sass, {code as className, codeBtns, codeCopy, codeCopied, codeCopiedAnimation, inlineCode, caption} from "./styles/code.module.scss"
import {useRef, useState} from "react"



export default function Code(props){

    const $refText = useRef()
    const [showCopied, setShowCopied] = useState()

    function copy(){
        navigator.clipboard.writeText($refText.current.innerText);
        setShowCopied(true)
        setTimeout( ()=> setShowCopied(false), 3000)
    }

    if (props.inline){
        return <span className={inlineCode} style={{...props.style, color: props.color}} id={props.id}>{props.children || props.text}</span>
    }

    return (
        <div className={sass.code} style={props.style} id={props.id}>
            <pre ref={$refText} className={sass.pre__code}>
                {props.children || props.text}
            </pre>

            {
                props.output && (
                    <div className={sass.div__output}>
                        <pre className={sass.pre__output}>{props.output}</pre>
                        <span>Output</span>
                    </div>
                )

            }

            <div className={sass.codeBtns}>
                <div className={sass.btnRed} />
                <div className={sass.btnOrange} />
                <div className={sass.btnGreen} />
            </div>
            <div className={sass.codeCopy} onClick={copy}/>
            <span className={[sass.codeCopied, showCopied ? sass.codeCopiedAnimation : ""].join(" ")}>Copied to clipboard...</span>
            { 
                    props.caption ?
                    <div className={sass.caption}>
                        <span>{props.caption}</span>
                    </div>:
                    ""
            }
        </div>
    )
}

