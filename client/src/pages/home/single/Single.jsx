import React from "react";
import "./single.css";
import Sidebar from "../../../sidebar/sidebar";
import SinglePost from "../../../singlePost/SinglePost";
export default function Single() {
  return (
    <div className="single">
      <SinglePost /> {/**we have imported our sidebar component here */}
      <Sidebar /> {/**we have imported our sidebar component here */}
    </div>
  );
}
