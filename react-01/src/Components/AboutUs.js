import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component{
    constructor(props){
        super(props)
        console.log("parent constructor")
    }
    componentDidMount(){
        console.log("[parent] mounted");
    }
    render(){
        console.log("parent render")
        return (<div>
            <h1>About us</h1>
            <h2>This is react project</h2>
            <User name = {"HArsha function"} location={"kalyan"} contact = {"9867759450"}/>
            <UserClass name = {"HArsha classs"} location={"kalyan"} contact = {"9867759450"}/>
        </div>)
    }
}
 

export default AboutUs;