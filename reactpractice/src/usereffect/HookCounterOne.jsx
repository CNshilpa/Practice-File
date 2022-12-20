import React,{ useEffect, useState } from "react"

function HookCounterOne() {
const [count, setCount] = useState(0)

useEffect(() => {
    document.title = `you clicked ${count} times`
}, [count])

  return (
    <div>
    <button onClick={()=> setCount(count+1)}> click {count} times</button>
    </div>
  )
}

export default HookCounterOne