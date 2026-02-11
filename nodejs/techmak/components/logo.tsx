import React from 'react'
import Link from "next/link"
import { cn } from "@/lib/utils"
const logo = ({className}:{className?:string;}) => {
  return (
    <Link href={"/"}>
        <h2 className={cn("text-2xl text-techmak_dark_blue font-black tracking-wider",className)}>
            Techmak <span>t</span>
        </h2>
    </Link>
  )
}

export default logo