import React,{ useEffect, useState } from "react"

function CounterOne() {
const [count, setCount] = useState(0)
const [name, setName] = useState('')

useEffect(() => {
    console.log("useEffect - Updating document title")
    document.title =  `you clicked ${count} times` 
}, [count])

  return (
    <div>
        <input type='text' value={name} onChange={e=> setName(e.target.value)}/>
<button onClick={()=> setCount(count+1)}> click {count} times</button>
    </div>
  )
}

export default CounterOne