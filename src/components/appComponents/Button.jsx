import React from "react"

export default function Button(props){
    return(
        <div>
          <a href="#">
            <span>{props.buttonText}</span>
          </a>
        </div>
    )
}