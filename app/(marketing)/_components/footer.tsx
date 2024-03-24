import React from 'react'
import Logo from './logo'
import { Button } from '@/components/ui/button'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="flex items-centre w-full p-6 bg-background z-50 dark:bg-[#1f1f1f]">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
            <Button size="sm" variant="ghost">Privacy Policy</Button>
            <Button size="sm" variant="ghost">Terms and Conditions</Button>
        </div>
    </div>
  )
}

export default Footer