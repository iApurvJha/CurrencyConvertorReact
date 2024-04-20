import React from 'react'

function GetCurrency(base_curr,givenVal,cnvtVal,set) {
    console.log(base_curr.currencyFirst)
    console.log(cnvtVal)
    let url=import.meta.env.VITE_REACT_APP_BASE_URL;
    url+=`${base_curr.currencyFirst}`
    console.log(url)

    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        const result=res
        let mulVal=result.data[cnvtVal.currencySecond]
        mulVal*=givenVal.givenVal
        console.log(mulVal)
        set.setConvertedVal((mulVal.toFixed(4)))



    })
    .catch((err)=>{
        alert("Some err occured")
        console.log(`err ${err}`)
    })
}

export default GetCurrency
