import React,{ useState ,useEffect} from 'react'
import axios from 'axios'
import BlogCard  from './BlogCard'
import './blog.css'
import './blogcard-styles.css'
import BlogCategories  from './BlogCategories'

/**
* @Biruk
* @Blog-page function
**/

const BlogPage = () => {
  const [blogCards, setBlogCards] =  useState();
  useEffect(() => {
    getAllBlogs()
  }, [])


  const getAllBlogs = async () => {
    const blogs = await axios.get("http://localhost:9999/blog")
    setBlogCards(blogs.data)
     console.log(blogs.data)
     }
  return (
    <div className='blog-details-layout'>
      
      <div className='blogcard-container'>
      {blogCards ? blogCards.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            )) : <div></div>}
      
         
      </div>
      <div className='blog-side-categories'>
          <BlogCategories/>
      </div>
    </div>
   )

 }


 export default BlogPage