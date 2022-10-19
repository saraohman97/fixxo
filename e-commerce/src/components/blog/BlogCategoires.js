import React from 'react'
import './blogCategories-styles.css'
/**

* @Biruk
* @BlogCategories function
**/


 const  BlogCategories = () => {
  return(
    <>
    <div className='blogCategories-conatiner'>
     <strong className='catagories-title'>
            Blog Categories
            <hr/>
      </strong>
          <li> book </li>
          <li>car </li>
          <li> book </li>
          <li>car </li>
       
      </div>
      <div className='blogCategories-conatiner'>
      <strong className='catagories-title'>
              Recent Blogs
              <hr/>
       </strong>
              <li> New fashin for the summer </li>
              <li>Color and Fashin </li>
              <li> Weather styles </li>
              <li>Bookes  </li>   

      </div>
      <div className='blogCategories-conatiner'>
     <strong className='catagories-title'>
            Blog Tags
            <hr/>
      </strong>
          <button> book </button>
          <button>car </button>
          <button> book </button>
          <button>car </button>
       
      </div>


      
          

      
    </>
   
   )

 }

 export default  BlogCategories;