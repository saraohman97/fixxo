import React from 'react'

/**
* @author
* @function BlogComment
**/
const CommentFrom =()=>{
    return (
    <form className='form-container-comment'>
      <strong>Leave replay</strong>
      <div>
      <input type="text" id="comment-box" placeholder="First name" />
      <input type="text" id="comment-box" placeholder="Second name" />
      </div>
     
      <textarea type="text" row='5' id="comment-box" placeholder="First name" />
      <button id="post">Post</button>
   </form> )
}
export const BlogComment = ( ) => {
  return(
    <>
      <strong>BlogComment</strong>
      <CommentFrom/>
    </>
    
   )

 }


 export default BlogComment 