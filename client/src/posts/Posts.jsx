import React from 'react'
import Post from '../post/Post'
import "./posts.css"
export default function Posts({posts}) {   
    return (
        <div className='posts'>
            {
               posts.map((p)=>
               (
                   <Post post={p} />        /**for each post i am calling the post component and after that i have passed this post in post component */
               ))
            }
        </div>
    )
}
