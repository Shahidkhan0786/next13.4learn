"use client"
import Link from "next/link";
import { useRouter } from "next/navigation"

const About = () => {
    const router = useRouter();
    const navigation = (name:string)=>{
        router.push(name)
    }
  return (
    <>
    <h2>About Us</h2>
    <button onClick={()=>navigation('/about/aboutcompany')}>About Our Company</button>
    <Link href="/about/aboutcompany">About Company</Link>
    </>
  )
}

export default About