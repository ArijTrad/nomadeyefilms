//APP.tsx
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'


export default function App() {
  const [count, setCount] = useState(0)

  return (
     <>

<Navbar/>

<br />

<div className='hi_iam'>
<h1 >    hi i am the app main page   </h1>
<h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
</div>



    </>
  )
}


