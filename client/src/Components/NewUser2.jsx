import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NewUser2 = (props) => {
    let [state,updateState]=useState();
    let [state2,updateState2]=useState(false);
    let fetchUser=async()=>{
    //   console.log('props.userId',props.userId);
        let val=await axios.get(`/users/${props.userId}`);
        // console.log(val);
        // console.log(val.data);
        updateState(val.data);
        updateState2(true)
        // return state
    }
    useEffect(()=>{
        fetchUser();
    },[])
  return (
    <div>
        {/* {state2?<h6>{state.name}</h6>:''}
        {state2?<p>{state.bio}</p>:''}
        {state2?<img>{state.img}</img>:''} */}
        {state2?
        <div className="about_blog col-md-12 col-sm-12 col-xs-12 zero-padding">
                                    <div className="about_img col-md-3 col-sm-4 col-xs-6 zero-padding">
                                        {/* <img src="images/blog-about.jpg" alt=""/> */}
                                        <img style={{"border":"1px solid"}} src={state.img} alt=""/>
                                    </div>
                                    <div className="details col-md-9 col-sm-8 col-xs-6">
                                        <h4>About Me</h4>
                                        <p className="text-cc">
                                            {state.bio}
                                            
                                        </p>
                                        <div className="social">
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                {/* <li><a href="#"><i className="fab fa-pinterest"></i></a></li>
                                                <li><a href="#"><i className="fab fa-dribbble"></i></a></li> */}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                :''
                                }
    </div>
  )
}

export default NewUser2;