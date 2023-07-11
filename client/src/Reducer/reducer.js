// const { useReducer } = require("react");
// let val=JSON.parse(localStorage.getItem('initialState'))
// let getPayload=JSON.parse(localStorage.getItem('payload'));
export let initialState=false;
export let reducer=(state,action)=>{
    if(action.type===true)
    {
        // return true;
        // console.log('action.payload',action.payload);
        return action.payload;
    }
    return state;
}
// let [state,action]=useReducer(reducer,initialState);