import { useState } from "react"

export const Login=()=>{


const [pass,setPassword]=useState("")
const [email,setEmail]=useState("")

const handleSubmit=()=>{
    const payload={email,pass}
    fetch("https://real-blue-bonobo-ring.cyclic.cloud/users/login",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
    localStorage.setItem("token",res.token)
})
    .catch(err=>console.log(err))

}

    return (
        <div>
<h3>Login</h3>

<input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} />
<input type="text" placeholder="password" onChange={(e)=>setPassword(e.target.value)} />
<button onClick={handleSubmit}>Submit</button>

        </div>
    )
}