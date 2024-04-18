import React, { useState ,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4} from 'uuid';
import { GlobalContext } from '../Context/GlobalState';

export default function Create() {
    const [title , setTitle]=useState('');
    const [category , setCategory]=useState('');
    const [content , setContent]=useState('');
    const [isPending, setisPending]=useState('false');
    const history=useHistory();
    const {AddBlog}=useContext(GlobalContext);

    //to add blogs

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,category,content,likes:0};
        setisPending(true);
        
        if(!localStorage["blogList"]){
            localStorage["blogList"]=JSON.stringify([]);
        }
        let blg=JSON.parse(localStorage["blogList"]);
        blg.push({id:uuidv4(),...blog});
        localStorage["blogList"]=JSON.stringify(blg);
        console.log(blg);

        //lets add for contex
        AddBlog(blog);

        history.push("/");
        history.go(0);
    }

    const cancel=()=>{
        history.push(`/`);
    }

  return (
    <div className="create">
        <div className="container">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog Title:</label>
            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
            <label>Blog Category:</label>
            <input type='text' value={category} onChange={(e)=>setCategory(e.target.value)} required/>
            <label>Blog Content:</label>
            <textarea value={content} onChange={(e)=>setContent(e.target.value)} required></textarea>
            {isPending && <button>Add Blog</button>}
            {!isPending && <button disabled>Adding Blog...</button>}
            <button onClick={cancel}>Cancel</button>
        </form>
        </div>
    </div>
  )
}
