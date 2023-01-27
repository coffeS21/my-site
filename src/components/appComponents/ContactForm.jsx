import React, {useRef} from "react"
import emailjs from '@emailjs/browser'

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
                <input
                type="text"
                placeholder="co name"
                name="company"
                />
                <input
                type="text"
                placeholder="name"
                name="name"
                />
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
                <textarea
                type="text"
                name="message"
                placeholder="message"
                />
                <button>submit</button>
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