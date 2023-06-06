
import './App.css'
import React, { useEffect, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)


    
  
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(value => {console.log(value.quotes); setData(value.quotes)})

  }, [])
  
  const a=data.filter((value)=>  value.id<=10)
  console.log(a)
  return <div>
    {a.map((value)=>{
     return <h1> {value.quote}</h1>
    })}

  </div>

}

         
  


export default App
