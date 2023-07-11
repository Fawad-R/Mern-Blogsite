import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const WelcomeSection = () => {
    let getUser=JSON.parse(localStorage.getItem('user'))
    let getFawBlogUser=JSON.parse(localStorage.getItem('FawBlogUser'));
    let Navigate=useNavigate()
    let GoToLogin=()=>{
        Navigate('/login')
    }
    let GoToLogout=async()=>{
        let val=await axios.get('/logout')
        if(val.status===200)
        {
            localStorage.setItem('user',JSON.stringify(null))
            // Navigate('/login')
        }
    }
  return (
    <div><div className="welcome-sec">
    <div className="welcome-bg">
        {/* <img src="images/welcome.png" alt=""/> */}
        <img height="100px" style={{"borderRadius":"300px"}} width="100px" src="Fawad2.jpg" alt=""/>
        <h4>welcome</h4>
        <p>I am Fawad
            <br/> A Web developer &
            <br/> Blogger
            {/* <br/> for millions people */}
            </p>
            {/* {console.log('getUser',getUser)} */}
            {getFawBlogUser?
            <button onClick={GoToLogout} id="Register">Logout</button>
            :
            <button onClick={GoToLogin} id="Register">Login</button>}
            {/* {getUser!==null?
            <button onClick={GoToLogout} id="Register">Logout</button>
            :
            <button onClick={GoToLogin} id="Register">Login</button>} */}
        <div className="social">
            <ul>
                <li><a href="https://www.facebook.com/Sites-guru-100365908988235/"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/sitesguru/"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/in/f%C3%A0wad-rehm%C3%A0n-035135210/"><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://youtube.com/channel/UC6KSqaX0K5nFW3biqH7Rz0A"><i className="fab fa-youtube"></i></a></li>
                {/* <li><a href="#"><i className="fab fa-dribbble"></i></a></li> */}
            </ul>
        </div>
    </div>
</div></div>
  )
}

export default WelcomeSection