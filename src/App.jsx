import Home from './Pages/Home'
import './App.css'
import Logo from './assets/logo.png'
import { useEffect, useState } from 'react'
function App() {
 const [loader,setLoader]=useState(false)
 useEffect(()=>{
  setLoader(true)
  setTimeout(() => {
    setLoader(false)
  }, 2000);
 },[])
  return (
    <>
    {loader ?
    <div className='   absolute top-[50%] left-[50%] z-50 transform translate-x-[-50%] translate-y-[-50%]' >

    <img className='animate-pulse ' src={Logo} width="150px" alt="" />
    </div>
    : 
     <Home />
    }
    </>
  )
}

export default App
