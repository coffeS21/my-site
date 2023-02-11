import React from "react"
import "../../styles/cssFiles/stickyNote.css"
import Button from"./Button.jsx"
export default function StickyNote(props){
    return(
        <div id="noteContainer">
            <div id="stickyOuter">
            <div id="sticky">
            <svg width="0" height="0">
            <defs>
            <clipPath id="stickyClip" clipPathUnits="objectBoundingBox">
            <path
            d="M 0 0 Q 0 0.69, 0.03 0.96 0.03 0.96, 1 0.96 Q 0.96 0.69, 0.96 0 0.96 0, 0 0"
            stroke-linejoin="round"
            stroke-linecap="square"
            />
            </clipPath>
            </defs>
            </svg>
            <div id="stickyContent">
            <div id="borderBox">
                   <h2>MY PROFOLIO</h2>
            </div>
            <div id="buttonContainer">
                <Button buttonText="ENTER"/>
            </div>
            </div>
            </div>
            </div>
        </div>
            
    )
}

