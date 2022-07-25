import { useEffect, useState, useRef } from "react"
import sass, {carousel as className} from "./styles/carousel.module.scss"

export default function Carousel(props){

    const [currentCard, setCurrentCard] = useState(props.default || 0)

    const getPos = center => [ (center) ? center-1: props.cards.length-1, (center+1) % props.cards.length ];
    const [leftCard, rightCard] = getPos(currentCard) 

    function cardClickHandler(index){
        // console.log(index)
        index===currentCard && props.callback && props.callback(currentCard)
        index===leftCard && setCurrentCard(leftCard)
        index===rightCard && setCurrentCard(rightCard)
    }
 

    return (
        <>
        <style jsx="true">{`
            .${sass.div__card}{
                ${props.spacing && `--spacing: ${props.spacing};`}
                ${props.duration && `--duration: ${props.duration};`}
            }
        `}</style>
        <div className={className} style={props.style} id={props.id}>
            <div className={sass.div__cards_wrap}>

                 {props.cards.map( (card, i) => {
                     
                     const extraClass =  
                     i===leftCard && sass.left || 
                     i===rightCard && sass.right || 
                     i===currentCard && sass.currentCard ||
                     ""
                     
                     return <div key={i} className={[sass.div__card, extraClass].join(" ")}  onClick={()=>cardClickHandler(i)}>{props.cards[i]}</div>
                     
                })}
                
            </div>
            <div className={sass.div__bubbles}>
                {props.cards.map( (_, i) => <div key={i} className={[sass.bubble, i===currentCard && sass.currentBubble].join(" ")} onClick={()=>setCurrentCard(i)}></div>)}
            </div>
            <div className={sass.div__buttons}>
                <button onClick={()=>setCurrentCard(leftCard)}>{"<"}</button>
                <button onClick={()=>setCurrentCard(rightCard)}>{">"}</button>
            </div>
        </div>
        </>
    )
}