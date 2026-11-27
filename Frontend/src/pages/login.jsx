import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


function App() {
 // const [email, setEmail] = useState("....")
 //  const [pass, setPass] = useState("")
  function print(){
    console.log("printing inside the print function")
    console.log(email,pass)
  }
  const location=useLocation();
 
  const[logindata,setlogindata]=useState({
    email:"",
    password:""
  })
  const regdata=location.state;
  function handlechange(e){
    e.preventDefault();
    setlogindata({
      ...logindata,  
      [e.target.name]:e.target.value
    })
  }
  const navigate=useNavigate();

  const e = (event) => {
    event.preventDefault()
    console.log("regdata",regdata.name)
    if(logindata.email===regdata.email && logindata.password===regdata.password){
      
      alert("login successfull")
        navigate("/dashboard",{state:logindata})
    }else{
      alert("registration failed")
    }
   
  }
  return (
        
        <div>
            {/*<h6 className="text-blue-500">Prajan Pi</h6>
            <input type='email' required placeholder='enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br></br>
            <input type='password' required placeholder='enter your password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
            <br></br>
            <button type='button' className="text-green-500" onClick={()=>console.log(email,pass)}>Submit</button>
            <br></br>
            <button type='button' className="text-green-500" onClick={()=>print()}>Submit</button> 
            */}
            
        
    
        <form onSubmit={e}>
            <input type='email' required placeholder='enter your email' name='email'iho onChange={handlechange}/>
            <br></br>
            <input type='password' required placeholder='enter your password' name='password' onChange={handlechange}/>
            <br></br>
            <button type='submit' className="text-green-500">Submit</button>
        </form>
      </div>
    )
}

export default App