import React, { useContext, useState } from 'react'
import axios from 'axios'
import { context1 } from '../App';
const Navbar = () => {
    let [state,updateState]=useState();
    let [state2,updateState2]=useState();
    let [state3,updateState3]=useState(false);
    //  useState()
    // let {LatestState,dispatch}=useContext(context1);
    // let {LatestState,dispatch}=useContext(context1);
    // let {latestState,dispatchlatestState}= useContext(latestContext);
    let inputEvent=async(e)=>{
        // updateState({[e.target.name]:e.target.value});
        updateState(e.target.value);
        // console.log(e.target.value);
        // if(e.target.value==='')
        // {
        //     return(
        //     localStorage.setItem('initialState',JSON.stringify(false))
        //     // localStorage.setItem('payload',JSON.stringify(null))
        //     // window.location.reload()
        //     )
        // }
        let val=await axios.get(`/search?q=${state}`); 
        // console.log('val',val.data);
        // console.log('val.data.length',val.data.length);
        if(val.status===200)
        { 
            updateState2(val.data);
            updateState3(true);
            // dispatch({type:true,payload:true});
            // dispatch({type:"true",payload:true});
            // dispatch({type:true,payload:val.data});
            // console.log('dispatch.payload',dispatch.payload);
            localStorage.setItem('initialState',JSON.stringify(true));
            localStorage.setItem('payload',JSON.stringify(val.data));
            // window.reload();
            // window.location.reload()
        }
    }
    let searchEvent=async(e)=>{
        e.preventDefault();
        let val=await axios.get(`/search?q=${state}`); 
        // console.log(val);
        if(val.status===200)
        {
            updateState2(val.data);
            updateState3(true);
            // dispatch({type:true,payload:true});
            // dispatch({type:"true",payload:true});
            // dispatch({type:true,payload:val.data});
            // console.log('dispatch.payload',dispatch.payload);
            // console.log('val.data.length',val.data.length);
        if(val.data.length===0)
            {
                localStorage.setItem('initialState',JSON.stringify(false))
                localStorage.setItem('payload',JSON.stringify(null))
           
            }
            else
            {
                // window.location.reload()
                localStorage.setItem('initialState',JSON.stringify(true));
                localStorage.setItem('payload',JSON.stringify(val.data));
           
            }
            // window.reload();
            // window.location.reload()
        }
    }
  return (
    <div>
        {/* ,"width":"99.8vw" */}
        <div className="row" style={{"backgroundColor":"black","color":"black","padding":"1%"}}>
                            <div className="col-md-6 col-sm-9 col-xs-12 zero-padding text-center" >
                                <nav className="navbar navbar-inverse ">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="navbar-collapse row collapse" id="myNavbar" aria-expanded="false" style={{"height": "1px"}}>
                                        <ul className="nav navbar-nav">
                                            {/* <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="/" aria-expanded="false">Home <span className="caret"></span></a> */}
                                            <li><a href="/">Home</a></li>
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/allblogs">Blogs</a></li>
                                            <li><a href="/contactus">Contact</a></li>
                                            <li><a href="/upload">Post</a></li>
                                            {/* <li><a href="gallery-post.html">Home</a></li> */}
                                                {/* <ul className="dropdown-menu">
                                                    <li className="dropdown"><a href="index.html">Home 1 <i className="fas fa-caret-right"></i></a>
                                                        <ul className="dropdown-menu dropdown-2">
                                                            <li><a href="index-left-sidebar.html">Left sidebar</a></li>
                                                            <li><a href="index.html">Right sidebar</a></li>
                                                            <li><a href="index-fullwidth.html">Full Width</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="index2.html">Home 2 <i className="fas fa-caret-right"></i></a>
                                                        <ul className="dropdown-menu dropdown-2">
                                                            <li><a href="index2-left-sidebar.html">Left Sidebar</a></li>
                                                            <li><a href="index2.html">Right Sidebar</a></li>
                                                            <li><a href="index2-fullwidth.html">Full Width</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="index3.html">Home 3 <i className="fas fa-caret-right"></i></a>
                                                        <ul className="dropdown-menu dropdown-2">
                                                            <li><a href="index3-left-sidebar.html">Left Sidebar</a></li>
                                                            <li><a href="index3.html">Right sidebar</a></li>
                                                            <li><a href="index3-fullwidth.html">Full width</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="dropdown"><a href="#">Single <i className="fas fa-caret-right"></i></a>
                                                        <ul className="dropdown-menu dropdown-2">
                                                            <li><a href="blog-single-left-sidebar.html">Blog Single Left Sidebar</a></li>
                                                            <li><a href="blog-single-right-sidebar.html">Blog Single Right Sidebar</a></li>
                                                            <li><a href="blog-single-fullwidth.html">Blog Single Full Width</a></li>
                                                        </ul>
                                                    </li>
                                                </ul> */}
                                            {/* </li> */}
                                            {/* <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">Features <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="author.html">Author Page</a></li>
                                                    <li><a href="landing-page.html">Landing Page</a></li>
                                                    <li className="dropdown"><a href="#">Blog <i className="fas fa-caret-right"></i></a>
                                                        <ul className="dropdown-menu dropdown-2">
                                                            <li><a href="gallery-post.html">Gallery Post</a></li>
                                                            <li><a href="audio-post.html">Audio post</a></li>
                                                            <li><a href="video-post.html">Video post</a></li>
                                                            <li><a href="quote-post.html">Quote post</a></li>
                                                            <li><a href="link-post.html">Link post</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="error.html">error 404</a></li>
                                                    <li><a href="comming-soon.html">Comming soon</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">Gallery <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="gallery-2column.html">Gallery 2 Column</a>
                                                    </li>
                                                    <li><a href="gallery.html">Gallery 3 column</a>
                                                    </li>
                                                    <li><a href="gallery-4column.html">Gallery 4 Column</a></li>
                                                    <li><a href="gallery-left-sidebar.html">Gallery left Sidebar</a></li>
                                                    <li><a href="gallery-right-sidebar.html">Gallery right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">CONTACT<span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="contact.html">CONTACT</a></li>
                                                    <li><a href="contact-2.html">CONTACT 2</a></li>
                                                </ul>
                                            </li>
                                            <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">About <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="about.html">about</a></li>
                                                    <li><a href="about-2.html">about 2</a></li>
                                                </ul>
                                            </li> */}
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            {/* <div className="col-md-3 col-sm-3 col-xs-3 white-social text-center responsive_none ">
                                <div className="social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                        <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <div className="col-md-3 col-sm-3 header-3-search text-right">
                                <div className="border-box">
                                    <form method="post" action="#">
                                        <input type="search" onChange={inputEvent} name="search" placeholder="search"/>
                                        <span><a href="" onClick={searchEvent} ><i className="fa fa-search"></i></a></span>
                                    </form>
                                </div>
                            </div> */}
                        </div>
    </div>
  )
}

export default Navbar