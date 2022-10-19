import React from 'react'
import BlogCard  from './BlogCard'
import './blog.css'
import BlogCategories  from './BlogCategoires'
/**
* @Biruk
* @Blog-page function
**/

const BlogPage = () => {
  return(
    <div className='blog-page-conatiner'>
      
      <div className='blog-card-list'>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      <BlogCard/>
      </div>
      <div className='blog-side-categories'>
       <BlogCategories/>
        </div>
    </div>
   )

 }

 export default BlogPage