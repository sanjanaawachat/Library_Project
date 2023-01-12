// //usestate,useeffect,useparam,useref

// import React,{useState} from 'react'

// export const Usestate = () => {
//     const [count,setCount]=useState(0);
//     const submited=(e)=>{
//         e.preventDefault();
//     }
//   return (
//     <div>
//         <h1>sanjana</h1>
//         <h2>count : {count}</h2>
//         <button className='btn btn-Warning m-3' onClick={()=>{setCount(count+1)}}>increment +</button>
//         <button className='btn btn-Dark m-3'onClick={()=>{setCount(count-1)}}>decrement-</button>



//         <form onSubmit={(e)=>{submited(e)}}>
//             <input type="text" placeholder='Enter your name'/>
//             <input type="password" placeholder='Enter your password'/>

//         </form>
//     </div>
//   )
// }
