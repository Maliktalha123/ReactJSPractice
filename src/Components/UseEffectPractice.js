import React, { useEffect } from 'react'
import UseStatePractice from './UseStatePractice'


function UseEffectPractice() {
// It will run on every render 
  useEffect( ()=>{
  alert("I am running on every Render")
})
// It will run only first time when you will open your website 

useEffect( ()=>{
  alert("I will run only first time of web page")
},[])

  return (
    <div>
<UseStatePractice />

    </div>
  )
}

export default UseEffectPractice
