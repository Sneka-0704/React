import React, { useEffect ,useState } from "react";

// const ABOUT = () => {
//     const [college, updateCollege] = useState("KEC");

//     const handleCollegeUpdate = () => {
//         updateCollege("Kongu Engineering College");
//     };

//     return (  
//         <div>
//             <h1>This is your About Page</h1>
//             <h1>Welcome to {college}</h1>
//             <button onDoubleClick={handleCollegeUpdate}>Update College name</button>
//         </div>
//     );
// };


const ABOUT=()=>{
    const [tabName,setTabname]=useState("you are free from cold Don't take any pills to avvoid sideeffects")
    const updateTablet=()=>{
        setTabname("Welcome to cold club take this tablet Citricin cure it");
    }
    const updateTablet1=()=>{
        setTabname("Welcome to fever club take this tablet Citricin cure it");
    }
    const updateTablet2=()=>{
        setTabname("Welcome to seizure club take this tablet Citricin cure it");
    }
    useEffect(()=>{
        console.log("side effect");
    },[tabName])
    return(
        <div>
            <h1>{tabName}</h1> 
            <button onDoubleClick={updateTablet}>Click me if you get cold</button>
            <button onDoubleClick={updateTablet1}>Click me if you get fever</button>
            <button onDoubleClick={updateTablet2}>Click me if you get epilepsy</button>
        </div>
    )
}

export default ABOUT;
