import Image from 'next/image'
"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router = useRouter();
  const navigate = (name:string)=>{
    router.push(name)
  }
  return (
    <main>
      <h2>Home Screen </h2>
      <Link href="/login">Go To Login Page</Link> <br/>
      <Link href="/about">Go To About Page</Link><br/>

      <button onClick={()=>navigate('/login')}>Login</button>
      <button onClick={()=>navigate('/about')}>About</button>
    </main>
  )
}
