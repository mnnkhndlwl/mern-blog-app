//import it in single.jsx
import React from "react";
import { useEffect, useState , useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import axios from "axios"
import { Context } from "../context/Context";


export default function SinglePost() {

  const location = useLocation()  // using uselocation hook or ye kya hota hai uske liye important2 document padhlo
  const path = location.pathname.split("/")[2];  // split ka 3rd path use karne ke liye split 
  //function hmare pathname ko 3 parts me divide karde ga or ham last part ko use kar rhe hai isliye 2 hai again agar tumhe 
  //pathname dekhna hai to console me jake dekho
  const [post, setPost] = useState({})
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const { user } = useContext(Context);
  
  const PF = "http://localhost:5000/images/"; // public folder

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false)
    } catch (err) {}
  };



  useEffect(() => {
    const getPost = async () =>{    // it's gonna fetch our posts or in post ko ham setpost me dalege so that we can use post in usestate
      const res = await axios.get("/posts/" +path);   
      setPost(res.data)   // update this post
      setTitle(res.data.title);
      setDesc(res.data.desc);
    };
    getPost()
  }, [path])  // whenver this path changes fire this useEffect

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        )}
        {updateMode ? (  // if it's updateMode then show input otherwise show that h1 tag
          <input
            type="text"
            value={title}
            className="singlePostTitleInput"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {post.username === user?.username && (  // if there's any other user then don't show edit and delete
              <div className="singlePostEdit">
                <i
                  className="singlePostIcon far fa-edit"
                  onClick={() => setUpdateMode(true)} //on click it will set update mode to true
                ></i>
                <i
                  className="singlePostIcon far fa-trash-alt"
                  onClick={handleDelete}
                ></i>
              </div>
              
            )}
          </h1>
        )}
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b> {post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updateMode && (
          <button className="singlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}