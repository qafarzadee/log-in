import { useState } from 'react'
import SignIn from './components/signIN'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <SignIn/>
    </>
  )
}

export default App
