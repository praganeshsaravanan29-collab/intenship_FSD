import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Dashboard() {
    const location=useLocation();
    const[userdata,setUserdata]=useState("");
    function displaydata(){
        setUserdata(location.state);
        console.log(userdata)
    }
    useEffect(()=>{
        setUserdata(location.state)
        console.log(userdata)
    },[])
  
    const checkendpoint=async()=>{
        const response=await API.get("/api/get")
        console.log(response.data)
    }
    return ( 
        <>
        
            dashboard
        <br></br>
        <button onClick={displaydata}>bu</button>
        </>
     );
}

export default Dashboard;