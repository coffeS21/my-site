import React from "react"

export default function Button(props){
    return(
        <>
          <a href="#">
            <span>{props.buttonText}</span>
          </a>
        </>
    )
}