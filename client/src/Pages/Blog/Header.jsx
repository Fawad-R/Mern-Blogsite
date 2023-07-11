import React from 'react'
import User from '../../Components/NewUser'
import { format } from 'timeago.js';
const Header = (props) => {
    // console.log('props',props)
    // console.log('props.state',props.state[0])
  return (
    <div><section className="blog-single">
    <div className="blog-header">
        <h5>{format(props.state[0].createdAt)}</h5>
        {/* <h2>There are many variations of pas<br/> sages of Travel</h2> */}
        
        <h2>{props.state[0].title}<br/></h2>
        <h6>by <span className="defualt-color">{<User userId={props.state.userId}/>}</span> in<span className="defualt-color"> {props.state[0].motive}</span></h6>
        {/* <p>state.userId</p> */}
        <div className="header-social">
            <div className="social">
                <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                    <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</section></div>
  )
}

export default Header