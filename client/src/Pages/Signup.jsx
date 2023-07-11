import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage} from '../Firebase/Firebase'
const Signup = () => {
  let [uploadState,updateUploadState]=useState(0)
  let [imgState0,updateImg00]=useState(false)
  let [imgState,updateImg]=useState()
  let [textState,updateText]=useState()
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
  let fileEvent=(e)=>{
    // console.log(e.target);
    // console.log(e.target.files[0]); 
    updateImg(e.target.files[0])
}
  let submitEvent=async(e)=>{
    e.preventDefault();
    let val=await fetch('/signupp',{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify(state1) 
    })
    // console.log(val);
    if (val.status===200) {
        alert('Registeration successful');
        Navigate('/login')
      }
      else if(val.status===403)
      {
       alert('passwords not matching');
      }
      else
      {
        alert('Registeration unsuccessful');
        Navigate('/error')
      }
  }
  useEffect(()=>{
    UploadEvent(imgState,"img")    
    updateImg00(true)
},[imgState])
let UploadEvent=(file,type)=>{
 if(imgState0){
  const metadata = {
    contentType: 'image/jpeg'
  };
  let date =imgState0? new Date().getTime()+ file.name: new Date().getTime()+ file.name
  const storageRef = ref(storage, date);
  // , metadata
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      // console.log('Upload is ' + progress + '% done');
      updateUploadState(progress)
      if(progress===100)
      {
          updateImg00(true)
      }
      switch (snapshot.state) {
        case 'paused':
          // console.log('Upload is paused');
        case 'running':
          // console.log('Upload is running');
      }
    }, 
    (error) => {
      switch (error.code) {
        case 'storage/unauthorized':
          break;
        case 'storage/canceled':
          break;
      case 'storage/unknown':
      }
  }, 
  // :''
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        // console.log('File available at', downloadURL);
        updateState1((prev)=>{
          // console.log('prev',prev);
          return {...prev,[type]:downloadURL}
      })
      });
    }
    );}
  }   
  return (
    <div className='Signup'>
      <form action="" method="post">
        <h1 style={{"textAlign":"start","fontWeight":"bold"}}>REGISTER</h1>
        <label htmlFor="fileInput1">Upload image1</label>
        <input className='fileInput' type="file" onChange={fileEvent} name="img" id="fileInput1" />
        {uploadState}% done <br />
        <input onChange={inputEvent} type="text" className='textInput' placeholder='name' name="name" id="" />
        <textarea onChange={inputEvent} name="bio" id="" cols="30" rows="10" placeholder='Tell us about yourself'></textarea>
        <input onChange={inputEvent} type="email" className='textInput' placeholder='email' name="email" id="" />
        <input onChange={inputEvent} type="password" className='textInput' placeholder='password' name="password" id="" />
        <input onChange={inputEvent} type="password" className='textInput' placeholder='confirm password' name="cpassword" id="" />
        <input onClick={submitEvent} type="submit" value="Register" id='Register' />
      </form>
    </div>
  )
}

export default Signup