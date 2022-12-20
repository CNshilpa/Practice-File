import React, {useState} from 'react'

function Count() {
    const [count, setCount] = useState([])

    const addCount = () =>{
       setCount([...count, {id: count.length, value: Math.floor(Math.random()*10) + 1}])

    }
  return (
    <div>
        <button onClick={addCount}>Add a number</button>
        <ul>
            {count.map(count => (<li key={count.id}>{count.value}</li>))}
        </ul>
    </div>
  )
}

export default Count