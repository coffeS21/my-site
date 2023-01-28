import React, {useRef} from "react"
import emailjs from '@emailjs/browser'
import Button from "./Button"
export default function ContactForm(props){
    const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('portfolio', 'portfolio', form.current, 'bfbDpLExWdCN96Mxg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
      alert("your message has been sent.")
     e.target.reset()
  }
    
    return(
        <div>
             <form ref={form} onSubmit={sendEmail}>

              <div>
                <input
                type="text"
                name="company"
                className="formInput"
                />
                 <input
                type="text"
                name="name"
                className="formInput"
                /> 
              </div>

              {/* <div>
                <input
                type="email"
                placeholder="email"
                name="email"
                required
                />
                <input
                type="phone"
                name="phone"
                placeholder="phone number"
                />
              </div>

              <div>
                <textarea
                type="text"
                name="message"
                placeholder="message"
                />
                <Button buttonText="submit"/>
              </div> */}

             </form>
        </div>
    )
}

/**
 * name
 * company name
 * email
 * phone number
 * message
 */