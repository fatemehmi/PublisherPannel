import Image from "next/image";
import { Inter } from "next/font/google";
import Cookies from "js-cookie";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [token,setToken]=useState(Cookies.get('token'))
    console.log(token)
 return (
  <main
   className={`flex min-h-screen flex-col items-center justify-between p-24`}
  >
    <div>
        {token?<button onClick={()=>{
            Cookies.remove('token')
            setToken('')}}>Logout</button>:""}
    </div>
    
  </main>
 );
}
