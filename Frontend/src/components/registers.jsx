import { useNavigate } from "react-router-dom";
import { registerschema } from "./registerschema";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"


function Register() {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerschema)
    });

    function onSubmit1(data) {
        console.log(data);
        alert("register success");
        navigate("/", { state: data });
    }

    return (
       <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#F5EBD8] to-[#E8D9C0] px-4 py-10">
        <form onSubmit={handleSubmit(onSubmit1)} className="flex flex-col gap-3 max-w-sm mx-auto mt-10 p-6 border border-stone-300 rounded-xl bg-amber-50 shadow-md">
                <h1 className="text-2xl font-bold text-brown-500 text-center">Register</h1>

                <input type='text' required placeholder='enter your namme' {...register("name")} className="border p-2 rounded-xl text-black"/>
                <p className="text-sm">{errors.name?.message}</p>

                <input type='email' required placeholder='enter your email' {...register("email")} className="border p-2 rounded-xl text-black"/>
                <p className="text-sm">{errors.email?.message}</p>

                <input type='password' required placeholder='enter your password' {...register("password")} className="border p-2 rounded-xl text-black"/>
                <p className="text-sm">{errors.password?.message}</p>

                <input type='number' required placeholder='enter your age' {...register("age")} className="border p-2 rounded-xl text-black"/>
                <p className="text-sm">{errors.age?.message}</p>

                <button type="submit" className="bg-blue-500 text-brown p-2 rounded hover:bg-blue-600">Register</button>
            </form>
        </div>
    );


}
export default Register;