import { useEffect, useState, useRef } from "react"
import sass, {carousel as className} from "./styles/carousel.module.scss"

export default function Carousel(props){

    const [currentCard, setCurrentCard] = useState([4,1])

    const getPos = center => [ (center) ? center-1: props.cards.length-1, (center+1) % props.cards.length ];
    const [prevCard, nextCard] = getPos(currentCard[0]) 

 

    return (
        <>
        <div className={className} style={props.style} id={props.id}>
            <div className={sass.div__cards_wrap}>

                 {props.cards.map( (card, i) => {
                     
                     const extraClass =  
                     i===prevCard && sass.prev || 
                     i===nextCard && sass.next || 
                     i===currentCard[0] && sass.currentCard ||
                     i===getPos(nextCard)[1] && sass.hiddenNext || 
                     i===getPos(prevCard)[0] && sass.hiddenPrev || 
                     ""
                     
                     return <div key={i} className={[sass.div__card, extraClass,  currentCard[1]===-1 && sass.reverse].join(" ")}>{props.cards[i]}</div>
                     
                    })}
                
            </div>
            <div className={sass.div__bubbles}>
                {props.cards.map( (_, i) => <div key={i} className={[sass.bubble, i===currentCard[0] && sass.currentBubble].join(" ")} onClick={()=>setCurrentCard([i,0])}></div>)}
            </div>
            <div className={sass.div__buttons}>
                <button onClick={()=>{setCurrentCard([prevCard, -1])}}>{"<"}</button>
                <button onClick={()=>{setCurrentCard([nextCard, 1])}}>{">"}</button>
            </div>
        </div>
        </>
    )
}