// import { useReducer } from "react";
// const value ={count:0};
// // const countFunc = (state,action) =>{
// //     if(action.type == "sub"){
// //         console.log("Hello");
// //         return {state:state.count-1}
// //     }
// //     else if(action.type === "add")
// //     {
// //         return {state:state.count+1}
// //     }
// // };
// function countFunction(state,action){
//     switch (action.type){
//         case "sub":
//             console.log("Hello")
//             return {count:state.count -1};
//         case "add'":
//             return {count:state.count +1};
//         case "reset":
//             return {count:value.count};
//     }        

// }

// const Login = () =>{
//     const [countVal,updateCount]= useReducer(countFunction,value);
//     return (
//         <div>
//             <h1>This is userReducer Example</h1>
//             <h2>Count :{countVal.count}</h2>
//             <button>Sub</button>
//             <button>Add</button>
//             <button>Reset</button>
//             {/* <h1>This is use reducer</h1>
//             <button onClick={() => dispatch({type: 'sub'})}>Subtract</button>
//         Count: {state.count}
//         <button onClick={() => dispatch({type: 'add'})}>Add</button> */}
//         </div>
//         );
//         // <div>
//         //     <h1>This is page is meant for your login.</h1>
//         // </div>
    
// }
// export default Login;



import {useReducer} from "react";
const initialState={count:0};
function reducer(state,action)
{    switch(action.type){
    case 'increment':
        return{count:state.count+1}
    case 'decrement':
        return{count:state.count-1}
   case 'reset':
        return{count:state.count=0}
    default:
        throw new Error();
}}
const Login=()=>
{ const[state,dispatch]=useReducer(reducer,initialState);
    return(
        <div>
            <h1>This page is meant for user Login</h1>
              Count:{state.count}
              <p></p>
            <button onClick={()=>dispatch({type:'increment'})}> Add </button>
            <button onClick={()=>dispatch({type:'decrement'})}> Sub</button>
           <button onClick={()=>dispatch({type:'reset'})}> Reset</button>
            <br></br><br></br>
        </div>
    )
    }
export default Login;