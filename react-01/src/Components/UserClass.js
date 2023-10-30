import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0,
            count1: 2,
        }
    }
    componentDidMount(){
    }
    render(){
        const {name, location, contact} = this.props
        const { count } = this.state;
        return (
            <div style={{border: "1px solid black"}}>
            <h3>{name}</h3>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                })
            }}>increment</button>
            <h3>Count: {count}</h3>
            <h3>{location}</h3>
            <h3>{contact}</h3>
        </div>
        )
    }
}

export default UserClass