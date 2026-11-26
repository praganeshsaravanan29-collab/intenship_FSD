function Dashboard() {
    const location=useLocation();
    const[userdata,setUserdata]=useState("");
    function displaydata(){
        setUserdata(location.state);
        console.log(userdata)
    }
    return ( 
        <>
        <h1>
            dashboard
        </h1>
        <button onClick={displaydata}>button</button>
        </>
     );
}

export default Dashboard;