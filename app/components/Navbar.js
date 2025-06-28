"use client"

import Link from "next/link";
import Image from "next/image";
import { Globe, User } from 'lucide-react';


export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
        <div className=" container mx-auto p-4 flex flex-row justify-between items-center gap-4">
        <div className="flex justify-between items-center gap-2">
                <span className="text-2xl font-bold">LAG</span>
                <User className="w-6 h-6" />
            </div>


            <ul className="flex gap-12 justify-center items-center">
                <li><Link href="/">Home</Link> </li>  
                <li><Link href="/about">About</Link></li>
                <li><Link href="/quiz">Mashy Quiz</Link></li>
                <li><Link href="/aid">Es3af LAG</Link></li>
                <li><Link href="/team">Team</Link></li>
                <li><Link href="/news">News</Link> </li>
                <li><Link href="/contact-us">Contact</Link></li>
            </ul>
            <div className="flex justify-between items-center ">
                <button className="language-selector flex items-center gap-2 pointer-fine:cursor-pointer">
                    <span>عربي</span>
                    <Globe  />
                </button>
            </div>
        </div>
    </div>
  )
}