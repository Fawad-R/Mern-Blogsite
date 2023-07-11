import React, { useEffect, useState } from 'react'
import Header from './Header'
import Blog_Main from './Blog_Main'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Blog = () => {
  let Navigate=useNavigate()
  let paramsid=useParams();
  // let getBlog=localStorage.setItem('blog',JSON.stringify(e));
  let [state,updateState]=useState()
  let [state2,updateState2]=useState(false)
  let getBlog=JSON.parse(localStorage.getItem('blog'));
  // console.log('getBlog',getBlog)
  let fetchBlog=async()=>{
    try {
      
      let val=await axios.get(`/blog/${getBlog}`);
      // console.log('getBlogval',val);
    if (val.status===200) {
      updateState(val.data)
      updateState2(true)
    }
    else
    {
      alert('please login first to further proceed')
      Navigate('/login')
    }
  } catch (error) {
    
    alert('please login first to further proceed')
    Navigate('/login')
  }
  }
  useEffect(()=>{
    fetchBlog()
  },[])
  return (
    state2?
    <div>
        <Header state={state} />
        <Blog_Main state={state} />
    </div>
    :
    ''
  )
}

export default Blog