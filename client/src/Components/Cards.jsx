import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import User from './NewUser'
import { useNavigate } from 'react-router-dom'
import { context1 } from '../App'
// import Data from "module";
let getInitialState;
let getPayload;
const Cards = () => {
    // let{latestState,dispatch}= useContext(context1)
    // console.log('getInitialState',getInitialState);
    // console.log('getPayload',getPayload);
    let Navigate=useNavigate();
    let [state,updateState]=useState([])
    // Data
    let fetchBlogs=async()=>{
        let val=await axios.get('/blogs');
        // console.log(val.data); 
        updateState(val.data)
    }
    useEffect(()=>{
        // getInitialState=JSON.parse(localStorage.getItem('initialState'));
        // getPayload=JSON.parse(localStorage.getItem('payload'));
        fetchBlogs()
    },[])
    let blogTitle=async(e)=>{
        localStorage.setItem('blog',JSON.stringify(e));
        Navigate('/blog')
    }
    // console.log('latestState',latestState);
  return (
    // Data.map((ele,ind))
getInitialState?
getPayload.map((ele,ind)=>{
        return(
                    <div key={ele._id} className="col-md-6 col-sm-6 col-xs-12 btm-padding">
                                            <div className="img-box">
                                                <img style={{"height":"250px","width":"100%"}} src={ele.img1} alt=""/>
                                            </div>
                                            <div className="post-details col-md-6 col-sm-4 col-xs-4 zero-padding">
                                                <h6 className="default-clr">{ele.motive}</h6>
                                            </div>
                                            <div className="col-md-6 col-sm-8 col-xs-8 zero-padding">
                                                <div className="social text-right blog-min">
                                                    <ul>
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="post_response min-post">
                                                <div className="col-md-12 col-sm-12 col-xs-12 zero-padding text-left">
                                                    <h4><a href="" onClick={()=>blogTitle(ele._id)} className="default-clr-hvr">{ele.title}</a></h4>
                                                </div>
                                                <ul className="col-md-12 col-sm-12 col-xs-12 zero-padding text-left">
                                                    <li><a href=""><i className="fas fa-eye"></i></a>{ele.view}</li>
                                                    <li><User userId={ele.userId} /> </li>
                                                    <li><a href=""><i className="fas fa-calendar-alt"></i></a>{format(ele.createdAt)}</li>
                                                </ul>
                                            </div>
                                        </div>
)
}):
state.map((ele,ind)=>{
        return(
                    <div key={ele._id} className="col-md-6 col-sm-6 col-xs-12 btm-padding">
                                            <div className="img-box">
                                                <img style={{"height":"250px","width":"100%"}} src={ele.img1} alt=""/>
                                            </div>
                                            <div className="post-details col-md-6 col-sm-4 col-xs-4 zero-padding">
                                                <h6 className="default-clr">{ele.motive}</h6>
                                            </div>
                                            <div className="col-md-6 col-sm-8 col-xs-8 zero-padding">
                                                <div className="social text-right blog-min">
                                                    <ul>
                                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="post_response min-post">
                                                <div className="col-md-12 col-sm-12 col-xs-12 zero-padding text-left">
                                                    <h4><a href="" onClick={()=>blogTitle(ele._id)} className="default-clr-hvr">{ele.title}</a></h4>
                                                </div>
                                                <ul className="col-md-12 col-sm-12 col-xs-12 zero-padding text-left">
                                                    <li><a href=""><i className="fas fa-eye"></i></a>{ele.view}</li>
                                                    <li><User userId={ele.userId} /> </li>
                                                    <li><a href=""><i className="fas fa-calendar-alt"></i></a>{format(ele.createdAt)}</li>
                                                </ul>
                                            </div>
                                        </div>
)
})


  )
}

export default Cards

    
    // state.map((ele,ind)=>{
    //     return(
    //                 <div className="col-md-6 col-sm-6 col-xs-12 btm-padding">
    //                                         <div className="img-box">
    //                                             <img style={{"height":"250px","width":"100%"}} src={ele.img1} alt=""/>
    //                                         </div>
    //                                         <div className="post-details col-md-6 col-sm-4 col-xs-4 zero-padding">
    //                                             <h6 className="default-clr">{ele.motive}</h6>
    //                                         </div>
    //                                         <div className="col-md-6 col-sm-8 col-xs-8 zero-padding">
    //                                             <div className="social text-right blog-min">
    //                                                 <ul>
    //                                                     <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
    //                                                     <li><a href="#"><i className="fab fa-instagram"></i></a></li>
    //                                                     <li><a href="#"><i className="fab fa-twitter"></i></a></li>
    //                                                     <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
    //                                                     <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
    //                                                 </ul>
    //                                             </div>
    //                                         </div>
    //                                         <div className="post_response min-post">
    //                                             <div className="col-md-12 col-sm-12 col-xs-12 zero-padding text-left">
    //                                                 <h4><a href="" onClick={()=>blogTitle(ele._id)} className="default-clr-hvr">{ele.title}</a></h4>
    //                                             </div>
    //                                             <ul className="col-md-12 col-sm-12 col-xs-12 zero-padding text-left">
    //                                                 <li><a href=""><i className="fas fa-eye"></i></a>{ele.view}</li>
    //                                                 <li><User userId={ele.userId} /> </li>
    //                                                 <li><a href=""><i className="fas fa-calendar-alt"></i></a>{format(ele.createdAt)}</li>
    //                                             </ul>
    //                                         </div>
    //                                     </div>
