import React from 'react'
import { Link } from 'react-router-dom'
/**
* @Biruk
* @Blog function
**/

const BlogCard = () => {
  return(
    <div className='blog-card'>
      <Link to ='/blog'>
        <strong>
          Blog-content
        </strong>
      </Link>
        <p>
          Blog-content
        </p>
    </div>
  )

}

export default BlogCard