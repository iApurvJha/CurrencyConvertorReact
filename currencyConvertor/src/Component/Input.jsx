import React from 'react'
import "../App.css"
import data from './data'

// console.log(data)

function Input(props) {

    function updateCurrency(e){
        props.setCurrency(e.target.value)
    }


    
    function updateVal(e){
        props.Val(e.target.value)
    }

  return (
    <div className='inputContainer'>
      <div className='inputDiv'>
        <span>{props.label1}</span>
        <span>{props.label2}</span>
      </div>
      <div className='inputDiv'>
        <input value={props.curr} onChange={updateVal} type={props.type} readOnly={props.readOnly} ></input>
        <select value={props.currency} onChange={updateCurrency}>
            {data.map((item)=>{
                return <option key={item} value={item}>{item} </option>

            })}
        </select>
      </div>
    </div>
  )
}

export default Input
