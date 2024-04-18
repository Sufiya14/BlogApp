import React, { useEffect, useState,useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';

export default function Update() {
    const { id} = useParams();

    const history = useHistory();
    const [data,setData]=useState({title:'',category:'',content:'',likes:''});

    const {EditBlog}=useContext(GlobalContext);
    
    useEffect(()=>{
        const edit=async()=>{
            let blog=JSON.parse(localStorage["blogList"]);
            console.log(id);
            const blg=blog.find((blog)=>blog.id===id);
            setData(blg);
            //console.log(data);
        }
        edit();
    },[]);
    
    const handleSubmit=async(e)=>{
        e.preventDefault();
    
        let blog=JSON.parse(localStorage["blogList"]);
        blog=blog.filter((b)=>b.id !== id);
        blog.push(data);
        localStorage["blogList"]=JSON.stringify(blog);

        EditBlog(data);//conetxapi
        history.push("/");
        history.go(0);
        console.log(data.title,data.category,data.content,data.likes);
    }

    const handletitle=(e)=>{
         setData({...data,title:e.target.value});
    }
    const handlecat=(e)=>{
        setData({...data,category:e.target.value});
    }
    const handlecont=(e)=>{
        setData({...data,content:e.target.value});
    }

    const cancel=()=>{
        history.push(`/`);
    }

    return (
        <div className="Edit">
            <div className="container">
            <h2>Edit a Blog</h2>
                {data && <form onSubmit={handleSubmit} >
                    <label>Blog Title:</label>
                    <input type='text' value={data.title} onChange={(e)=>handletitle(e)} required />
                    <label>Blog Category:</label>
                    <input type='text' value={data.category} onChange={(e)=>handlecat(e)} required />
                    <label>Blog Content:</label>
                    <textarea type='text' value={data.content} onChange={(e)=>handlecont(e)} required ></textarea>
                    <button >Edit</button>
                    <button onClick={cancel}>Cancel</button>
                </form>
                }
                
            </div>
        </div>
    )
}
