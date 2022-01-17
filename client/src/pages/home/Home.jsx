// Again we will use rfc
//we have imported our header here

import { useState , useEffect } from 'react'
import React from 'react'
import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import Sidebar from '../../sidebar/sidebar'
import "./home.css"
import axios from "axios"
import { useLocation } from 'react-router-dom'

export default function Home() {
    
    const [posts,setPosts] = useState([]); //used useState hook
    const { search } = useLocation();   // to use search property again console me jake dekh lo 
    // serach property (localhost:3000/?user=xyz isme ham ek particular user ki posts find kar rahe hai) to jab hmara url ye hoga to
    //usme tum dekh sakte ho search property 

    useEffect(() => {  // used useEffect hook
        const fetchPosts = async () =>{  // to fetch our posts
            const res = await axios.get("/posts" + search)  // using get method and using search property also
            setPosts(res.data)   // to set our post agar browser me inspect pe clic karoge to usme console me ek data ka section ayega console.log(res) karne par us data to set post karna
        }
        fetchPosts()
    }, [search]) // useEffect is gonna fire up everytime this search changes 
   
    return (
        <>
           <Header/>   {/* to use header which is in header folder to use here */}
        <div className='home'>
           <Posts posts={posts} />   {/**passing our posts as props and passing this prop in posts component*/}
           <Sidebar />
          
        </div>
        </>
    )
}
