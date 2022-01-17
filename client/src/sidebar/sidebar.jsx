// again as usual rfc ye to permanent hai bhai
// i have imported this side bar in setting page
import React from "react";
import { useState,useEffect } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {

  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");  //it's gonna fetch my categories 
      //and after that i'm gonna update my categories
      setCats(res.data);  // agar tum confuse ho rhe ho ki ye res.data kyu hai to jab ham console.log karte hai or tum console me jake dekhoge to usme tumhe milega data
    };
    getCats();
  }, []) //empty array bcuz we gonna fire this at the beginning

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://stories.freepiklabs.com/storage/12971/coding-bro-1867.png"
      
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
          obcaecati cumque placeat officia.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          {
          cats.map((c)=>(   // again using map(for each category)
          <Link to={`/?cat=${c.name}`} className="link">  {/*using link jab ham us category pe click kare to ham us category ki sarri posts pe chale jaye*/}
          <li className="sidebarListItem">{c.name}</li>
          </Link>
          ))
          }
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-pinterest"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
