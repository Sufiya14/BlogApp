import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { useParams ,useHistory} from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalState';

export default function Details() {
    const { id } = useParams();
    const history=useHistory();
    let blog=JSON.parse(localStorage["blogList"]);

    //details page
    const {blogs,RemoveBlog,EditLike}=useContext(GlobalContext);
    console.log(blogs);
    const blg=blogs.find((blog)=>blog.id===id);
    console.log(blg);

    const handleDelete=()=>{
        
        blog=blog.filter((b)=>b.id !== id);
        localStorage["blogList"]=JSON.stringify(blog);
        RemoveBlog(id); //for contexapi
        history.push("/");
        history.go(0);
    }

    const handleEdit=()=>{
        history.push(`/edit/${id}`);
    }

    const like=()=>{
       console.log("liked");
       
        blog=blog.filter((b)=>b.id !== id);
        blg.likes=blg.likes+1;
        blog.push(blg);
        localStorage["blogList"]=JSON.stringify(blog);

        EditLike(blg);//contexapi
        history.push(0);
        history.go(0);
        //console.log(blg);
    }

    
  
    return (
        <div className="blog-details">
            <div className="container">
                <h4>Blog detail</h4>
                {blg && (
                    <article>
                        <h5>{blg.title}</h5>
                        <h6>{blg.category}</h6>
                        <p>{blg.content}</p>
                        <button class="bi bi-hand-thumbs-up" onClick={like}>Like ({blg.likes})</button>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleEdit}>Edit</button>
                    </article>
                )}<br/><br/>
                <Link to='/'>Back to homepage</Link>
            </div>
        </div>
    )
}
