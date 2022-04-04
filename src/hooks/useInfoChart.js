import { useEffect, useState } from 'react';

const useInfoChart = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
       .then(res=>res.json())
       .then(data=>setData(data))
    },[])
    return [data,setData]
};

export default useInfoChart;