 const initialState=null;
 const reducer=(state,action)=>{
  
    if(action.type==="USERVALID"){
        return action.payload;
    }
    console.log(action.payload)

    return state;
}
export {reducer,initialState}