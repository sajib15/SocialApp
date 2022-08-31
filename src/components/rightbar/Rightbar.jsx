import React from 'react'
import './rightbar.css'
const Rightbar = () => {


  const money_con=(money)=>{

    return (Math.abs(Number(money))>=1.0e+9 ?
     (Math.abs(Number(money))/1.0e+9).toFixed(2)+"B": 
     Math.abs(Number(money))>=1.0e+6 ? 
     (Math.abs(Number(money))/1.0e+6).toFixed(2)+"M":
     Math.abs(Number(money))>=1.0e+3 ? 
     (Math.abs(Number(money))/1.0e+3).toFixed(2)+"K": Math.abs(Number(money)))
    }
  return (
    <div className='rightbar'>{money_con(2000)}</div>
  )
}

export default Rightbar