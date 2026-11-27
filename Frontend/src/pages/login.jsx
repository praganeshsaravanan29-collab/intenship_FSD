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
        
        <div >
            {/*<h6 className="text-blue-500">Prajan Pi</h6>
            <input type='email' required placeholder='enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <br></br>
            <input type='password' required placeholder='enter your password' value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
            <br></br>
            <button type='button' className="text-green-500" onClick={()=>console.log(email,pass)}>Submit</button>
            <br></br>
            <button type='button' className="text-green-500" onClick={()=>print()}>Submit</button> 
            */}
            
        
    
        <form onSubmit={e}  className="flex flex-col gap-3 max-w-sm mx-auto mt-10 p-6 border border-stone-300 rounded-xl bg-amber-50 shadow-md">
          <h1 className="text-2xl font-bold text-brown-500 text-center">Login Page</h1>
            <input type='email' required placeholder='enter your email' name='email' onChange={handlechange}  className="border p-2 rounded-xl text-black"/>
            <br></br>
            <input type='password' required placeholder='enter your password' name='password' onChange={handlechange}  className="border p-2 rounded-xl text-black"/>
            <br></br>
            <button type='submit'className="bg-blue-500 text-brown p-2 rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    )
}

export default App