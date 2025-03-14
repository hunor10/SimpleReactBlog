import {useState, useEffect } from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [e,setE]=useState(null);
    useEffect(()=>{
        const abortCont = new AbortController();
        setTimeout(()=> {
             fetch(url , { signal: abortCont.signal} )
            .then(res => {
                console.log(res);
                if(!res.ok){throw Error('couldn"t fetch the data for that resource ');}
                return res.json(); 
            })
            .then(data => {
                console.log(data);
                setData(data);
                setIsPending(false)
                setE(null)
            })
            .catch(e => {
                if (e.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                     setE(e.message); 
             }
        })
        }, 500); 
        return () => abortCont.abort();
    }, [url]);
    return {data , isPending, e}
} 

export default useFetch