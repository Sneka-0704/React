import React from "react";
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"KEC",
            course:"MERN"
        }

    }
    changeState = () =>{
        console.log("Kongu Engineering College") //useState should be used when we come to oops.
    }
    render(){
        return(
            <div>
                <h1>This is state component.</h1>
                <h2>Hello, {this.state.name}<br></br>This is {this.state.course} class</h2>
                <h3>I  am changing the state of the {this.state.name} to{this.changeState()}</h3>
                <button onClick={this.changeState} >Click me to change the state</button> 
                {/* onClick={this.changeState} --->when u give changeState() that function will be called*/}
            </div>
        )
    }
}
export default StateComponent;