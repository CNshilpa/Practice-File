import React, {useState} from 'react'

function Message() {
    const [message, setMessage] = useState({firstMsg : '', lastMsg : ''})
  return (
    <div>
        <h2>Your first message = {message.firstMsg}</h2>
        <input type={'text'} value={message.firstMsg} onChange={e => setMessage({...message, firstMsg : e.target.value})}/>
        <h2>Your last message = {message.lastMsg}</h2>
        <input type={'text'} value={message.lastMsg} onChange={e => setMessage({...message, lastMsg : e.target.value})}/>
    </div>
  )
}

export default Message