import { useEffect, useState } from 'react';

const useInfo = () => {
    const [info,setInfo]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/product-analysis-website/main/data.json')
       .then(res=>res.json())
       .then(data=>setInfo(data))
    },[])
    return [info,setInfo]
};

export default useInfo;