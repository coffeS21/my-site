import React from "react"
import  "../styles/cssFiles/landingPageDisplay.css"
import Header from "../components/appComponents/Header"
import SubHeader from "../components/appComponents/SubHeader"
import StickyNote from "../components/appComponents/StickyNote"
export default function LandingPageDisplay(props){
    return(
            <div id="backgroundContainer">
                <div id="headerContainer">
                    <Header header="FRONTEND-DEVELOPER"/>
                </div>
                <div id="stickyNote">
                        <h6>MY PORFOLIO</h6>
                        <StickyNote/>
                </div> 
                <div id="nameContainer">
                    <Header header="SHELTZ COFFE"/>
                </div>
            </div>
    )
}
