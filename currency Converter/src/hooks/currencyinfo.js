import { useEffect, useState } from "react";

function usecurrencyinfo(currency){
    const [data, setdata]=useState({})
    useEffect(()=>{
        fetch(`https://cdn.jsdeliver.net/gh/fawazahmedo/currency-api@1/latest/currencies/${currency}.json`).then((res)=>res.json())
        .then((res)=>setdata(res[currency]))
        console.log(data)
    },[currency])
    console.log(data);
    return data;
}

export default usecurrencyinfo;