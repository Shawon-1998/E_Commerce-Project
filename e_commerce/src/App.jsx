import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import Banner from './Components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Nav />
    <Banner />
    </>
  )
}

export default App
