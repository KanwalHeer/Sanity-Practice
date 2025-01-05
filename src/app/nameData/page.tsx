"use client"

import React from 'react'
import { useEffect } from 'react'

export default function NmaeData() {
    useEffect(()=>{
        localStorage.setItem("nameData","hello")
       },[])

       const removeData = ()=>{
        localStorage.removeItem("nameData")
       }
  return (
    <div>
      <h1>name data</h1>
      <button onClick={removeData}>remove data</button>
    </div>
  )
}
