import React from 'react'

import {Link} from 'react-router-dom'
/**
* @Biruk
* @Blog function
**/

const BlogCard = ({blog}) => {
  return(
    <div className='blogcard'>
       <Link to ='/blogdetails'>
          <img src={blog.image} className='blogcard-img' alt='img-blog'/>
        </Link>
        <p>
          {blog.blogBody}
        </p>
       
       
    </div>
   )

 }

 export default BlogCard