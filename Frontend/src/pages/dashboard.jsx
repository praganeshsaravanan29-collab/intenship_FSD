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
    return ( 
        <>
        
            dashboard
        <br></br>
        <button onClick={displaydata}>bu</button>
        </>
     );
}

export default Dashboard;