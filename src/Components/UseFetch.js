import {useState, useEffect}from 'react'

const  UseFetch=(url)=> {
    //initially i used  json data. 

    const [data, setData] = useState(null); 
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    //it runs evertime state change , it renders
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error("could not fetch data from that resource");
                    }
                    return res.json();
                }).then(data => {
                    console.log(data);
                    setData(data);
                    setisPending(false);
                    setError(null);
                })
                .catch(err => {
                    setisPending(false);
                    setError(err.message);
                    //console.log(err.message);
                })
        }, 1000); 
    }, [url]);

    //now useEfffect used to fetch data .
    return{data,isPending,error};
}
export default UseFetch;