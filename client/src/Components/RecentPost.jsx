import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { format } from 'timeago.js';
const RecentPost = (props) => {
    let Navigate=useNavigate();
    let [state, updateState] = useState();
    let [state2, updateState2] = useState(false);
    let fetchRecent = async () => {
        let val = await axios.get(`/${props.query}`);
        // console.log(val.data);
        updateState(val.data)
        updateState2(true)

    }
    useEffect(()=>{
        fetchRecent()
    },[])
    // <h3></h3>
    let blogTitle=async(e)=>{
        localStorage.setItem('blog',JSON.stringify(e));
        Navigate('/blog')
    }
    return (
        state2?
        state.map((state,index)=>{
            return(
            <div key={state._id}>
            <div className=" recent-post ">
                <div className="">

                    <div className="min-post">
                        <div className="table-cell">
                            {/* <img src="images/min-post-01.jpg" alt="img" /> */}
                            <img style={{"height":"80px","width":"90px"}} src={state.img1} alt="img" />
                        </div>
                        <div className="table-cell min-details">
                            <h5><a href="" onClick={()=>blogTitle(state._id)} className="default-clr-hvr">{state.title}</a></h5>
                            <p className="date">{format(state.createdAt)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    })
    :''
    )
}
<div className="border-line"></div>

export default RecentPost