import { useNavigate } from "react-router-dom";
import { registerschema } from "./registerschema";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"


function Register(){
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(registerschema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register success")
        navigate("/")
    }

return(
    <>
     <form onSubmit={handleSubmit(onSubmit1)}>
            <input type='text' required placeholder='enter your namme'{...register("name")}/>
            <p>{errors.name?.message}</p>
            <input type='email' required placeholder='enter your email'{...register("email")}/>
            <p>{errors.email?.message}</p>
            <input type='password' required placeholder='enter your password'{...register("password")}/>
            <p>{errors.password?.message}</p>
            <input type='number' required placeholder='enter your age'{...register("age")}/>
            <p>{errors.age?.message}</p>
            <button type="submit">button</button>
        </form>

        </>
);
}
export default Register;