import { useEffect, useState } from "react"

export const Notes=()=>{
    const [notes,setNotes]=useState([])

    useEffect(()=>{
        fetch("https://real-blue-bonobo-ring.cyclic.cloud/notes",{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).then(res=>res.json())
        .then((res)=>{
            console.log(res)
            setNotes(res)
        })
        .catch((err)=>console.log(err))
    },[])

    return(<div>
        <h1>All Notes will be here</h1>
        {notes.map((el)=>{
            return(
                <div><h1>{el.title}</h1>
            <p>{el.content}</p>
            <button>Edit</button>
            <button onClick={()=>{
                console.log("clicked deleted")
                fetch(`https://real-blue-bonobo-ring.cyclic.cloud/notes/delete/${el._id}`,{
                    method:"DELETE",
                    headers:{
                        "Authorization":localStorage.getItem("token")
                    }
                }).then(res=>res.json())
                .then((res)=>{
                    console.log(res)
                   
                })
                .catch((err)=>console.log(err))
                
            }}>Delete</button>
            
            </div>
            )
})}
    </div>)
}