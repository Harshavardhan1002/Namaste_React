import { useState } from "react"

const User = (props) => {
    const {name, location, contact} = props
    const[count] = useState(0)
    return (
        <div style={{border: "1px solid black"}}>
            <h3>{name}</h3>
            <h3>Count: {count}</h3>
            <h3>{location}</h3>
            <h3>{contact}</h3>
        </div>
    )
}
export default User