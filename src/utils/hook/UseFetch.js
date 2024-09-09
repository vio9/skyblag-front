import { useEffect, useState } from "react";
import axios from "axios";

function UseFetch(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(!url) return;
        setLoading(true)
       const getData = async () => {
        try {
            const result = await axios.get(url)
            setData(result.data)
        } catch(error){
            setError(true)
            console.log(error)
        } finally {
            setLoading(false)
        }
       }
       getData()
    }, [url])
    
    return {data, loading, error};

}

export default UseFetch