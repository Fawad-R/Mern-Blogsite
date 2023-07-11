import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from '../../Firebase/Firebase'
import axios from 'axios';

const Upload = () => {
  let Navigate = useNavigate();
  let [imgState0, updateImg0] = useState(false)
  let [imgState000, updateImg000] = useState(false)
  let [imgState00, updateImg00] = useState(false)
  let [uploadState, updateUploadState] = useState(0)
  let [uploadState2, updateUploadState2] = useState(0)
  let [imgState, updateImg] = useState()
  let [imgState2, updateImg2] = useState()
  // let [imgState3,updateImg3]=useState()
  let [textState, updateText] = useState()
  let fileEvent = (e) => {
    // console.log(e.target);
    // console.log(e.target.files[0]);
    updateImg(e.target.files[0])
  }
  let fileEvent2 = (e) => {
    // console.log(e.target);
    // console.log(e.target.files[0]);
    updateImg2(e.target.files[0])
  }
  let inputEvent = (e) => {
    updateText({ ...textState, [e.target.name]: e.target.value });
    // console.log('textState', textState);
  }
  let submitEvent = async (e) => {
    // console.log('imgState', imgState);
    // console.log('textState', textState);
    e.preventDefault();
    let val = await fetch('/blog', {
      method: "POST",
      headers: {
        "content-Type": "application/json"
      },
      // body:JSON.stringify({imgState},textState)
      body: JSON.stringify(textState)
    })
    if (val.status === 200) {
      alert('post uploaded successfully!')
      Navigate('/')
    }
    else {
      alert('Error uploading please try again later!')
      Navigate('/')
    }
  }
  let fetchSecret=async()=>{
    try {
      
    
    let val=await axios.get('/secret');
    // console.log(val);
    if(val.status!=200)
    {
      alert('please login first to proceed further!!!')
      Navigate('/login')
    }
  } catch (error) {
    alert('please login first to proceed further!!!')
    Navigate('/login') 
  }
  }
  useEffect(()=>{
    fetchSecret()
  },[])
  useEffect(() => {
    UploadEvent(imgState, "img1")
    updateImg0(true)
  }, [imgState])
  useEffect(() => {
    UploadEvent(imgState2, "img2")
    updateImg000(true)
    // updateImg2
  }, [imgState2])

  let UploadEvent = (file, type) => {

    // const storage = getStorage();

    // Create the file metadata
    // /** @type {any} */
    if (imgState0) {
      const metadata = {
        contentType: 'image/jpeg'
      };

      // Upload file and metadata to the object 'images/mountains.jpg'
      // let date=new Date().getTime+file.name;
      // let date=new Date().getTime+"FAWAD";
      let date = imgState0 ? new Date().getTime() + file.name : new Date().getTime() + file.name
      const storageRef = ref(storage, date);
      // , metadata
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log('Upload is ' + progress + '% done');
          imgState0 ? updateUploadState(progress) : updateUploadState2(progress)
          if (progress === 100) {
            imgState0 ? updateImg00(true) : updateImg000(true)
          }
          switch (snapshot.state) {
            case 'paused':
              // console.log('Upload is paused');
              break;
            case 'running':
              // console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;

            // ...

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        // :''
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('File available at', downloadURL);
            updateText((prev) => {
              // console.log('prev', prev);
              return { ...prev, [type]: downloadURL }
            })
          });
        }
      );
    }
  }
  return (
    <>
    <div className=' upload0'>
      {/* Signup */}
      <div className='upload'>
        <form action="" method="post">
            <label htmlFor="fileInput1">Upload image1</label>
            <input className='fileInput' type="file" onChange={fileEvent} name="img1" id="fileInput1" />
            {uploadState}% done <br />
            <label htmlFor="fileInput2">Upload image2</label>
            <input className='fileInput' type="file" onChange={fileEvent2} name="img2" id="fileInput2" />
            {uploadState2}% done
            <input className='textInput' placeholder='motive' onChange={inputEvent}  type="text" name="motive" id="" />
            <input className='textInput' placeholder='title' onChange={inputEvent} type="text" name="title" id="" />
            <textarea className='textInput' placeholder='description' onChange={inputEvent} name="desc" id="" cols="30" rows="10"></textarea>
            <input className='textInput' placeholder='quote (if any)' onChange={inputEvent} type="text" name="quote" id="" />
            {/* <input className='textInput' placeholder='motive' onChange={inputEvent} type="number" name="view" id="" /> */}
            <input className='textInput' placeholder='categories' onChange={inputEvent} type="text" name="categories" id="" />
            {imgState00&&imgState000? <input type="submit" onClick={submitEvent} id="Register" value="Upload post" />:"You have to upload img to proceed further "}
            {/* imgState00? <input type="submit" onClick={submitEvent} id="Register" value="Upload post" />:"You have to upload img to proceed further " */}
            <br />
        </form>
    </div>
    </div>
    <div style={{"backgroundColor":"black","paddingBottom":"4%"}}>
    </div>
    </>
  )
}

export default Upload