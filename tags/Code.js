import {code as className, codeBtns, codeCopy, codeCopied, codeCopiedAnimation, inlineCode, caption} from "./styles.module.scss"
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
        <div className={className} style={props.style} id={props.id}>
            <pre ref={$refText}>{props.children || props.text}</pre>

            <div className={codeBtns}>
                <div className="btnRed" />
                <div className="btnOrange" />
                <div className="btnGreen" />
            </div>
            <div className={codeCopy} onClick={copy}/>
            <span className={[codeCopied, showCopied?codeCopiedAnimation:""].join(" ")}>Copied to clipboard...</span>
            { 
                    props.caption ?
                    <div className={caption}>
                        <span>{props.caption}</span>
                    </div>:
                    ""
            }
        </div>
    )
}

