import sass from "./styles/link.module.scss"
import NextLink from "next/link"

export default function Link(props){
    


    return <NextLink 
                className={sass.link} 
                target={props.target} 
                href={props.href || "#"} 
                as={props.as} 
                id={props.id} 
                title={props.title} 
                style={props.style}
                >
                    
                    {props.children || props.text}
                    
            </NextLink>
}