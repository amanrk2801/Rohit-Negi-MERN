import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const count = useSelector((state)=>state.slice1.count)
  return (
    <div style={{display:"flex", justifyContent:"center", gap:"30px"}}>
    <h1>Swiggy</h1>
    <h1>Card: ({count})</h1>
    </div>
  )
}

export default Header