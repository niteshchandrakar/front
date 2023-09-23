import { useState } from "react"

export const Signup=()=>{

const [username,setUsername]=useState("")
const [pass,setPassword]=useState("")
const [email,setEmail]=useState("")

const handleSubmit=()=>{
    const payload={username,email,pass}
    fetch("https://real-blue-bonobo-ring.cyclic.cloud/users/register",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

}

    return (
        <div>
<h3>Registration</h3>
<input type="text" placeholder="username" onChange={(e)=>setUsername(e.target.value)}/>
<input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
<input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
<button onClick={handleSubmit}>Submit</button>

        </div>
    )
}