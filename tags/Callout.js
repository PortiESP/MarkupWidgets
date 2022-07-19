import {callout as className} from "./styles.module.scss"
import {danger} from "./styles.module.scss"

// labelData={{text: "Secret", color: "#25AA88", style: ["font-weight: 500;", "filter: brightness(130%);"]}}
export default function Callout(props){
    
    return (
        <>
            <style jsx="true">{`
                

                div.warning::before{
                    --color: orange;
                    content: "Warning!";
                    border: 1px solid var(--color);
                    color: var(--color);
                }
                div.info::before{
                    --color: #55c5eb;
                    content: "Info";
                    border: 1px solid var(--color);
                    color: var(--color);
                }
                div.tip::before{
                    --color: rgb(255, 238, 0);
                    content: "Pro tip!";
                    border: 1px solid var(--color);
                    color: var(--color);
                }
                div.custom::before{
                    content: "${props.labelData && props.labelData.text}";
                    border: 1px solid ${props.labelData && props.labelData.color};
                    color: ${props.labelData && props.labelData.color};
                    ${props.labelData && props.labelData.style && props.labelData.style.join("")}
                }
                div.danger{
                    background: repeating-linear-gradient(
                        45deg,
                        #000000,
                        #000000 10px,
                        #ffd000 10px,
                        #ffd000 20px
                    );
                    padding: 3px;
                }
                div.danger::before{
                    content: "${props.labelData && props.labelData.text || "Danger!"}";
                    border: 1px solid ${props.labelData ? props.labelData.color?props.labelData.color: "#ffd000": "#ffd000"};
                    font-weight: 30;
                    color: ${props.labelData ? props.labelData.color?props.labelData.color: "#ffd000": "#ffd000"};
                    ${props.labelData && props.labelData.style && props.labelData.style.join("")}
                }

                    
                  
                

            `}</style>
            <div className={[className, props.label].join(" ")} style={props.style} id={props.id}>
                <p >{props.children || props.text}</p>
            </div>
        </>
    )
}