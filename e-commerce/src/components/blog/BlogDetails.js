import React from 'react'
import  BlogCategories from './BlogCategoires'
import BlogComment from './BlogComment'
import './blogdetails-styles.css'
/**
* @Biruk
* @BlogDetails function
* @Blog-details-styles.css
**/

const BlogDetails = () => {
  return(
    <div className='blog-details-layout'>

        <div className='blog-details'>
                    <div className='blog-section-details-one'>
                      <img className='blog-details-main-img' src= {'https://images.unsplash.com/photo-1665596553794-61961a0b40ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'} alt='img'></img>
                      <div className='sub-profile'>
                        <i className='fa-solid fa-user Author-profile '></i>
                        <span>Author profile</span>
                        <span className='blog-publish-date'><i class="fa-solid fa-calendar-days"></i> xx-xx-xxxx</span>
                      </div>
                    </div>
              <div className='blog-section--details-two'>
                    <p className='titlle'> The eljgldfj gjljho </p>
                      <div className='blog-details-content'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software 
                            like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                          <div className='blog-details-subcontent'>
                            
                              <img src ={'https://images.unsplash.com/photo-1665680521183-1a77175d81dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60'} className='blog-details-sub-img' alt='img'></img>  
                              <p className=''>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                              remaining essentially unchanged.</p> 
                            </div>
                              
                            <div>  
                            <p className=''>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                              remaining essentially unchanged.</p> 
                            
                            </div>
                            <div className='box-tags'>
        <strong>Tags:</strong>
        <span className='tags-list'> Books , Elment , Mars</span>
       </div>
                  <BlogComment/>                                  

                        
                </div>
              </div>
        </div>
        <div className='blog-details-categories'>
        <BlogCategories/>
        </div>
       
    </div>
   
   )

 }

 export default BlogDetails