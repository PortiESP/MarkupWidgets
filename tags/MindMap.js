'use client'

import sass from "./styles/mindmap.module.scss"
import sass2 from "./styles/mindmap2.module.scss"
import { useEffect, useState } from "react"



// PROPS width=999, height=999, controls{label, title, type, initial, ids||idsGroups}
export default function MindMap(props){

    const [hide, setHide] = useState(false)
    const [viewbox, setViewbox] = useState([0, 0, props.width, props.height])
    const [mouseCoords, setMouseCoords] = useState([0, 0])
    const [isHover, setIsHover] = useState(false)
    const [isPressed, setIsPressed] = useState(false)
    const [zoom, setZoom] = useState(1)
    const baseInc = 0.9

    const wheelEvent = e => {
        const isMax = () => (viewbox[2]+baseInc > props.width) || (viewbox[3]+baseInc > props.height)

        const inc = e.deltaY < 0 ? baseInc: 1/baseInc  // Handle zoom in/out
        const diffW = viewbox[2] - viewbox[2]*inc  // Handle increment
        const diffH = viewbox[3] - viewbox[3]*inc  // Handle increment
        if (e.deltaY < 0 || !isMax() && !isPressed) setViewbox(old => [old[0]+diffW/2, old[1]+diffH/2, old[2]-diffW, old[3]-diffH])
        setZoom(viewbox[2]/props.width)

    }

    const controlsJSX = props.controls?.map(item => {
        switch (item.type) {
            case "toggle": return <Toggle label={item.label} title={item.title} ids={item.ids} initial={item.initial}/>
            case "chamber": return <Chamber label={item.label} title={item.title} idsGroups={item.idsGroups} initial={item.initial}/>
        }
    })

    console.log(props.controls, controlsJSX)


    const moveEvent = e => {
        if (isPressed){
            let deltaX;
            let deltaY;

            if (!mouseCoords[0] && !mouseCoords[1]) {
                setMouseCoords([e.clientX, e.clientY])  // Initial state
                deltaX = 0
                deltaY = 0
            }
            else {
                deltaX = (mouseCoords[0] - e.clientX) * (zoom*0.75)
                deltaY = (mouseCoords[1] - e.clientY) * (zoom*0.75)
            }

            console.log(viewbox, deltaX, deltaY, zoom)  // DEBUG

            setViewbox([viewbox[0]+deltaX, viewbox[1]+deltaY, viewbox[2], viewbox[3]])  // Move viewbox
            setMouseCoords([e.clientX, e.clientY])  // Update coords
        } 
    }


    useEffect(()=>{
        document.body.style.overflow = (isHover ? "hidden" : "visible")
    }, [isHover])



    return (<div className={sass.div__wrap} 
                onWheel={wheelEvent} 
                onMouseEnter={()=>setIsHover(true)} 
                onMouseLeave={()=>{setIsHover(false); setIsPressed(false)}}
                onMouseDown={()=>{setIsPressed(true); setMouseCoords([0,0])}}
                onMouseUp={()=>setIsPressed(false)}
                onMouseMove={moveEvent}
            >
        {/* Image */}
        <div className={sass.div__image}>
            <svg viewBox={viewbox.join(" ")} fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                {props.children}
            </svg>
        </div>
        {/* Menu */}
        {   controlsJSX &&
            <div className={sass.div__menu}>
                {/* Menu header */}
                <div className={[sass.div__menu_header, hide&&sass.status__hide].join(" ")} onClick={()=>setHide(old => !old)}>
                    <span className={sass.span__header_title}>Menu</span>
                    <span className={sass.span__header_icon}></span>
                </div>
                {/* Menu items */}
                    <div className={[sass.div__menu_body, hide&&sass.state__hide].join(" ")}>
                        <hr/>
                        
                        {
                            controlsJSX
                        }
                    </div>
            </div>
        }
        {/* Zoom label */}
        <span className={sass.span__zoom} onClick={()=>{setZoom(1); setViewbox([0, 0, props.width, props.height])}}>
            {Math.round((1/zoom)*100)}%
        </span>
    </div>)
}



function setIds(IDslist, state){
    IDslist.map(id => document.getElementById(id).style.visibility = state ? "visible" : "hidden")
}



// PROPS {label="", ids[""], initial=false, title}
function Toggle(props){
    
    const [state, setState] = useState(props.initial || false)

    useEffect(()=>{
        console.log("Setting: ", props.ids, " to ", state)
        setIds(props.ids, state)
    }, [state])

    return (<div className={[sass2.div__toggle_wrap, state ? sass2.state__on : sass2.state__off].join(" ")} title={props.title || props.label} onClick={()=>setState(old=>!old)}>
        <div className={sass2.div__toggle_label}>{props.label}</div>
        <div className={sass2.icon__eye}></div>
    </div>)
}

// PROPS {label="", idsGroups[{label:"", ids:[""]}], initial=false, title=""}
function Chamber(props){
    
    const [selected, setSelected] = useState(0)
    const [state, setState] = useState(props.initial || false)
    
    // Selected listener
    useEffect(()=>{
        console.log("Setting selected to ", props.idsGroups[selected])

        // Hide unselected
        props.idsGroups.map( group => setIds(group.ids, false) ) 
        // Show selected
        setIds(props.idsGroups[selected].ids, true)
        setState(true)

    }, [selected])

    // State listener
    useEffect(()=>{
        console.log("Setting: ", selected, " to ", state)
        setIds(props.idsGroups[selected].ids, state)
    }, [state])

    
    // Initial settings
    useEffect(()=> setState(false), [])



    return (<div className={[sass2.div__chamber_wrap, state ? sass2.state__on : sass2.state__off].join(" ")} title={props.title || props.label}>
        <div className={sass2.div__chamber_label} onClick={()=>setState(old=>!old)}>{props.label}</div>
        <select className={sass2.select__chamber_selector} onChange={e=>setSelected(e.target.value)}>
            {
                props.idsGroups.map( (group,i) => <option key={i} value={i}>{group.label}</option>)
            }
        </select>
        <div className={sass2.icon__eye} onClick={()=>setState(old=>!old)}></div>
    </div>)
}