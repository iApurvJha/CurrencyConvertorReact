import { useState } from 'react'
import './App.css'
import Input from './Component/Input'
import GetCurrency from './Component/GetCurrency'

function App() {
  const [currencyFirst, setCurrencyFirst] = useState("USD")
  const [currencySecond, setCurrencySecond] = useState("INR")
  const [givenVal,setVal]=useState(0)
  const [convertedVal,setConvertedVal]=useState
  (0)

  function getRes(){
    GetCurrency({currencyFirst},{givenVal},{currencySecond}, {setConvertedVal})
  }
  function currChange(){
    setCurrencyFirst(currencySecond)
    setCurrencySecond(currencyFirst)
  }
  return (
    <>
     <div className='center'>
      <div className='container'>
        <Input type="number" label1="from" label2="currency Type" readOnly={false} currency={currencyFirst} setCurrency={setCurrencyFirst} Val={setVal} curr={givenVal}/>
        <button onClick={currChange} className='swap-cnvt'>SWAP</button>
        <Input  label1="To" label2="currency Type " readOnly={true}  currency={currencySecond} setCurrency={setCurrencySecond} val={setConvertedVal} curr={convertedVal}  />
        <button onClick={getRes} className='btn-cnvt'>Convert  {currencyFirst} To {currencySecond}</button>
      </div>
     </div>
    </>
  )
}

export default App
