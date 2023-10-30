import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
    }
    render(){
        return (<div>
            <h1>About us</h1>
            <h2>This is react project</h2>
            <UserContext.Consumer>
            {/* <User name = {"HArsha function"} location={"kalyan"} contact = {"9867759450"}/> */}
            {({loggedInUser}) => {
                <h1>{loggedInUser}</h1>
            }}
            </UserContext.Consumer>

            <UserClass name = {"harsha"} location={"kalyan"} contact = {"9867759450"}/>
        </div>)
    }
}
 

export default AboutUs;