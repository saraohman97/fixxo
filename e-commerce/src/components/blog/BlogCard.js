import React from 'react'

import {Link} from 'react-router-dom'
/**
* @Biruk
* @Blog function
**/

const BlogCard = () => {
  return(
    <div className='blogcard'>
       <Link to ='/blogdetails'>
          <img src={'https://images.unsplash.com/photo-1665596553794-61961a0b40ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'} className='blogcard-img' alt='img-blog'/>
                </Link>
        <p>
          Blog-content-Title
        </p>
       
       
    </div>
   )

 }

 export default BlogCard