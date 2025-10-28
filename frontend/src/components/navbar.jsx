import React from 'react'
import idea from '../assets/idea.png'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto py-4 dark:text-white">
      <div className='flex items-center justify-center gap-2'>
        <img src={idea} alt="idea" className="h-10 w-10 object-contain" />
        <span className="font-extrabold text-3xl">AptiBox</span>
      </div>
      <div className="space-x-4">
        <Button variant='outline'>Login</Button>
        <ModeToggle />
      </div>
    </nav>
  )
}

export default Navbar