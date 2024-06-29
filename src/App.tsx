import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [name , setName] = useState("");
  const [message , setMessage] = useState("")

  return (
    <>
     <h1>Contact form</h1>
     <form name="contact" method="POST" >
  <input type="hidden" name="form-name" value="contact" />
  <div className="input">
    <label htmlFor="name">Name</label>
    <input
      type="text"
      id="name"
      name="name"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <div className="input">
    <label htmlFor="message">Message</label>
    <textarea
      name="message"
      id="message"
      placeholder='your message'
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    ></textarea>
  </div>
  <button type='submit'>Send Message</button>
</form>

    </>
  )
}

export default App
