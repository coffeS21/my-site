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

                <label>
                  <div>
                    <p>name</p>
                  </div>
                  <div>
                    <input
                    type="text"
                    name="company"
                    className="formInput"
                    />
                  </div>
                </label>
                <label>
                  <div>
                    <p>company</p>
                  </div>
                  <div>
                    <input
                    type="text"
                    name="company"
                    className="formInput"
                    />
                  </div>
                </label>
                <label>
                  <div>
                     <p>email</p>
                  </div>
                  <div>
                    <input
                    type="email"
                    name="email"
                    className="formInput"
                    />
                  </div>
                </label>
                <label>
                  <div>
                    <p>phone</p>
                  </div>
                  <div>
                    <input
                    type="phone"
                    name="phone"
                    className="formInput"
                    />
                  </div>
                </label>
                <label>
                  <div>
                    <p>message</p>
                  </div>
                  <div>
                    <textarea
                    type="text"
                    name="phone"
                    id="message"
                    placeholder="send me a message!"
                    />
                  </div>
                </label>
                <div id="subButton">
                  <Button  buttonText="SUBMIT"/>
                </div>
              </div>
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