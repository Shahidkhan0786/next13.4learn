"use client";
import { useRouter } from "next/navigation";
const Login = ()=>{
    const router = useRouter();
    return <>
    <button onClick={()=>router.push('/')}>home</button>
     <h3>I am a Login Page</h3>
    </>
}

export default Login;