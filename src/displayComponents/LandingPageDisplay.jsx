import React from "react"
import  "../styles/cssFiles/landingPage.css"
import Header from "../components/appComponents/Header"
import StickyNote from "../components/appComponents/StickyNote"

export default function LandingPageDisplay(props){
    return(
        <div id="backgroundContainer">
            <div id="headerContainer">
                <Header header="FRONTEND-DEVELOPER"/>
            </div>
            <div id="stickyNoteContainer">
                <StickyNote/>
            </div>
            <div id="nameContainer">
                <Header header="SHELTZ COFFE"/>
            </div>
        </div>
    )
}

            // <div id="backgroundContainer">
            //         <StickyNote/> 
            // </div>