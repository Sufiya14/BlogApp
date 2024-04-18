import React, {  useContext } from 'react'
import BlogList from './BlogList';
import { GlobalContext } from '../Context/GlobalState';

export default function Home() {
  
  const {blogs}=useContext(GlobalContext);
  //homepage which shows blog list through bloglist.js
  return (
    <div className='container'>
      {blogs && blogs.length>0?<BlogList blogs={blogs} title="All blogs!!" />:<h3 style={{margin:"30px"}}>Blogs does not exist. Please Add Blogs</h3>}
    </div>
  )
}
