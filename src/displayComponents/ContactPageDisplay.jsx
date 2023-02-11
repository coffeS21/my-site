import React from "react"
import ContactForm from "../components/appComponents/ContactForm"
import "../styles/cssFiles/ContactPage.css"
export default function ContactPageDisplay(props){
    return(
        <div id="backgroundContainer">
              <div id="formContainer">
                    <ContactForm/>
            </div>  
        </div>
    )
}