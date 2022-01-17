// we are calling this post components in our posts

import React from "react";
import "./post.css";
import { Link } from "react-router-dom";

export default function Post({post}) { //using post prop here jo hmara posts component se arhra hai

  const PF = "http://localhost:5000/images/"; // public folder

  return (
    <div className="post">
     {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
      <div className="postCats">
          {post.categories.map((c) => (   // again using map 
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">  {/**i am using link here so that when we click on post's title i want to go to single post
         * ye link to isliye work kiya kyuki ham react router dom use kar rhe hai
         */}
        <span className="postTitle">{post.title}</span>   {/**jo hmara hmara post ka title hai usse ham props ki help se yaha use kar pa rhe hai same kaam ham bakio ke sath bhi karege */}
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc"> 
        {post.desc}
      </p>
    </div>
  );
}
