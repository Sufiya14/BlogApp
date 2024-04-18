import React from 'react'
import { Link } from 'react-router-dom';

export default function BlogList(prop) {
  const blogs = prop.blogs;
  const title = prop.title;

  return (
    <div className="BlogList">
      <br/>
      <h3>{title}</h3>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
