
import React from "react";
import "../css/PropsComponent.css";
function PropsComponent(props){
    const styleAttrs={ 
        backgroundColor:"brown",
        color:"white"
    }
    return(
        <div style={styleAttrs}>
        {/* // <div style={{color:"yellow",backgroundColor:"brown"}}> */}
            hello,{props.name} <br></br>This is {props.course}class
        </div>
    )
}
export default PropsComponent;