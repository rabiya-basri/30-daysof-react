import React from 'react'
import ReactDOM from 'react-dom'
const rootElement = document.getElementById('root')

const heading = 'SUBSCRIBE'
const description = 'Signup with your email address to recive news and updates'
const formheading = (
  <div className="formstyle">
    <h1>{heading}</h1>
    <p>{description}</p>
    <input type="text" placeholder="firstname" />
    <input type="text" placeholder="lastname" />
    <input type="text" placeholder="Email" />
    <button>Submit</button>
   </div>
 )

ReactDOM.render(formheading,rootElement)