import { useEffect, useState, useRef } from "react"
import sass, {carousel as className} from "./styles/carousel.module.scss"

export default function Carousel(props){

    const [currentCard, setCurrentCard] = useState(4)

    const getPos = center => [ (center) ? center-1: props.cards.length-1, (center+1) % props.cards.length ];
    const [leftCard, rightCard] = getPos(currentCard) 

    function cardClickHandler(event){
        if (event.target.className.split(" ")[1] !== sass.currentCard ){
            event.target.className.split(" ")[1] === sass.left ? setCurrentCard(leftCard): setCurrentCard(rightCard)
        }
        else{
            event.stopPropagation()
            props.clickHandler && props.clickHandler(currentCard)
        }
    }
 

    return (
        <>
        <div className={className} style={props.style} id={props.id}>
            <div className={sass.div__cards_wrap}>

                 {props.cards.map( (card, i) => {
                     
                     const extraClass =  
                     i===leftCard && sass.left || 
                     i===rightCard && sass.right || 
                     i===currentCard && sass.currentCard ||

                     ""
                     
                     return <div key={i} className={[sass.div__card, extraClass].join(" ")} onClick={cardClickHandler}>{props.cards[i]}</div>
                     
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