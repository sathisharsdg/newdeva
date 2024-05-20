import React, { useEffect, useState } from 'react'
import { createContext } from 'react'; 
import axios from "axios"
import Dataone from './ApiEndPoints/Pages/Dataone';
export const mycontext = createContext();
function App() {
 const [api,setApi] = useState([])
 const getapi = ()=>{
    axios.get("https://randomuser.me/api/")
    .then((res)=>{
        setApi(res.data.results)
        console.log(res.data.results);
    }).catch((err)=> console.log(err))
 }

 const generate = ()=>{
  getapi()
 }

 useEffect(()=>{
   getapi()
 },[])
  return (
    <div>
     <h1>SATHISH MAKE CHANGES</h1>
      <button onClick={generate}>GENERATE</button>
      <mycontext.Provider value={api}>
           <Dataone></Dataone>
      </mycontext.Provider>
    </div>
  )
}

export default App
