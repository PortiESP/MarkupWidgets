import sass from "./styles/section.module.scss"


export default function Section(props){


    return (
        <section className={sass.section} id={props.id} style={props.style}>
            <div className={sass.div__headers}>
                {props.title && <h2 className={sass.title}>{props.title}</h2>}
            </div>
            <div className={sass.div__content}>
                {props.children}
            </div>
        </section>
    )
}