import {callout as className} from "./styles.module.scss"
import {warning, info, tip} from "./styles.module.scss"

// labelData={{text: "Secret", color: "#25AA88", style: ["font-weight: 500;", "filter: brightness(130%);"]}}
export default function Callout(props){
    
    return (
        <>
            <style jsx="true">{`
                p.custom::before{
                    content: "${props.labelData && props.labelData.text}";
                    border: 1px solid ${props.labelData && props.labelData.color};
                    color: ${props.labelData && props.labelData.color};
                    ${props.labelData && props.labelData.style && props.labelData.style.join("")}
                }
                p.warning::before{
                    --color: orange;
                    content: "Warning!";
                    border: 1px solid var(--color);
                    color: var(--color);
                }
                p.info::before{
                    --color: #55c5eb;
                    content: "Info";
                    border: 1px solid var(--color);
                    color: var(--color);
                }
                p.tip::before{
                    --color: rgb(255, 238, 0);
                    content: "Pro tip!";
                    border: 1px solid var(--color);
                    color: var(--color);
                }  
            `}</style>

            <p className={[className, props.label].join(" ")} style={props.style} id={props.id}>{props.children || props.text}</p>
        </>
    )
}