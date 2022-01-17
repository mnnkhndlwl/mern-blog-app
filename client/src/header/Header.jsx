// Again we have used rfc
//we are using this header in our home which is in the pages folder

import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">    
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img src="https://i.ytimg.com/vi/uNCr7NdOJgw/maxresdefault.jpg" alt="" className="headerImg" />
        </div>
    )
}
