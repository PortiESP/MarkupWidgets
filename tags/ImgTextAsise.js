
import Img from "./Img"
import sass from "./styles/imgtextaside.module.scss"

export default function ImgTextAside(props){
    return (<>
        <style>{`
            .${sass.div__wrap}{
                --imgProportion:${props.imgProportion || "30%"};
            }
            .${sass.div__text_wrap}{
                ${props.separator && "border-left: 4px solid #444;"}
            }
        `}</style>
        <div className={sass.div__wrap} id={props.id} style={props.style}>
            <div className={sass.div__image_wrap}><Img title={props.title} src={props.src} style={{margin:"0"}} ratio={props.ratio || "1/1"} hideCaption/></div>
            <div className={sass.div__text_wrap}>{props.children}</div>
        </div>
    </>)
}