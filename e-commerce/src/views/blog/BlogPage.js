import React from 'react'
import BlogCard  from './BlogCard'
import './blog.css'
import './blogcard-styles.css'
import BlogCategories  from './BlogCategories'
import SecondNavbar from '../../components/navbar/SecondNavbar'
/**
* @Biruk
* @Blog-page function
**/

const BlogPage = () => {
  return(
    <>
    <SecondNavbar />

    <div className='blog-details-layout'>
      
      <div className='blogcard-container'>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
        <BlogCard/>
      </div>
      <div className='blog-side-categories'>
        <BlogCategories/>
      </div>
    </div>
    </>
   )

 }

 export default BlogPage