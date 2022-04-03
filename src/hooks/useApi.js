import { useEffect, useState } from "react";

const useApi = () => {
    const [api,setApi]=useState()
    useEffect(()=>{
        fetch('review.json')
        .then(res=>res.json())
        .then(data=>setApi(data))
    },[])
    return [api,setApi]
};

export default useApi;