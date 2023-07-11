import axios from 'axios'
import React, { useEffect, useState } from 'react'

const User = (props) => {
    let [state,updateState]=useState();
    let [state2,updateState2]=useState(false);
    let fetchUser=async()=>{
      // console.log('props.userId',props.userId);
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
        {/* {state2?<h6>{state.name}</h6>:''} */}
        {state2?<li>{state.name}</li>:''}
        {/* {state2?<h6>{state._id}</h6>:''} */}
    </div>
  )
}

export default User