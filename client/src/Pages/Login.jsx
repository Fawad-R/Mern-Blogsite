import axios from 'axios';
import React, { useContext, useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
const Login = () => {
  // let {state,dispatch}= useContext()
  let Navigate=useNavigate();
  let [state1,updateState1]=useState({});
  let inputEvent=(e)=>{
    if(e.target.name==='email')
    {
      updateState1({...state1,[e.target.name]:e.target.value.toLowerCase()})
    }
    else
    {
    updateState1({...state1,[e.target.name]:e.target.value})}
  }
  let submitEvent=async(e)=>{
    e.preventDefault();
    let val=await fetch('/loginn',{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(state1) 
    })
    // console.log(val);
    if (val.status===200) {
        alert('Login successful');
        localStorage.setItem('user',JSON.stringify(state1.email))
        localStorage.setItem('FawBlogUser',JSON.stringify(true))
        // updateState1(dispatch({type:true}))
        // localStorage.setItem('initialState',JSON.stringify(true));
        Navigate('/')
      }
      else if(val.status===403)
      {
       alert('Wrong login details!');
      } 
      else
      {
        // alert('Wrong login details!');
        alert('Login unsuccessful');
        // Navigate('/error')
    }
  }

  return (
    <div className='Signup'>
      <form action="" method="post">
      <h1 style={{"textAlign":"start","fontWeight":"bold"}}>Login</h1>
        <input onChange={inputEvent} type="email" className='textInput' placeholder='email' name="email" id="" />
        <input onChange={inputEvent} type="password" className='textInput' placeholder='password' name="password" id="" />
        <input onClick={submitEvent} type="submit" value="Login" id='Register' />
      <div style={{"marginTop":"4%"}}>
      <p>Don't have an account?</p>
      <NavLink to="/signup">Register here</NavLink>
      </div>
      </form>
    </div>
  )
}

export default Login