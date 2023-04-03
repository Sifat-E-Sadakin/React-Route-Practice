import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Outlet, useNavigation } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0);

  let loader = useNavigation();

  return (
    <div className="App">
      <div>
        <a href="/" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     <Navbar></Navbar>
     <div>{loader.state==='loading'?'Loading...!':''}</div>
     <Outlet></Outlet>
      
    </div>
  )
}

export default App
