import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Poppins } from 'next/font/google'

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "400"]
})

type Props = {}

const Logo = (props: Props) => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
        <Image className="dark:hidden" src="/icon.svg" height="40" width="40" alt="Logo"/>
        <Image className="hidden dark:block" src="/icon-white.svg" height="40" width="40" alt="Logo"/>
        <p className={cn("font-semibold", font.className)}>Eloquent</p>
    </div>
  )
}

export default Logo;