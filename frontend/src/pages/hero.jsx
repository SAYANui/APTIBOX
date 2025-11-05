import React from 'react'
import { Button } from '@/components/ui/button'

import Navbar from '@/components/navbar'

const Hero = () => {
  return (
    <div className="dark:text-white h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-[90%] text-center px-4">
        <h1 className="text-5xl font-bold mb-6">Welcome to AptiBox</h1>
        <p className="text-lg mb-8">
          Discover your potential with AptiBox - your ultimate platform for mastering aptitude tests.
        </p>
        <div className="space-x-4">
          <Button className="bg-[#328aff] text-white hover:bg-[#1e9aff] shadow-md">
            Get Started
          </Button>
          <Button variant="outline" className="shadow-md">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Hero
