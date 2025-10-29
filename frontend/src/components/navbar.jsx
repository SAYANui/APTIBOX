import React from 'react'
import idea from '../assets/idea.png'
import { ModeToggle } from './mode-toggle'
import { Button } from './ui/button'
import { LuMenu } from 'react-icons/lu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SheetDemo } from './sheet-demo';

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between container mx-auto py-4 dark:text-white border-b border-gray-300 dark:border-gray-700 sm:px-6 px-4">
      <div className='flex items-center justify-center gap-2'>
        <img src={idea} alt="idea" className="h-10 w-10 object-contain" />
        <span className="font-extrabold sm:text-3xl lg:text-3xl">AptiBox</span>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center space-x-2">
        <ModeToggle />
        <SheetDemo text="Log In" variant="outline" buttonStyle="" title="Log In" description="Enter your credentials to access your account." submitText="Log In" closeText="Cancel" labelsAndInputs={[{ label: "Email", type: "email", defaultValue: "example@email.com" }, { label: "Password", type: "password", defaultValue: "" }]} />
        <SheetDemo text="Sign Up" variant="primary" buttonStyle="bg-[#328aff] hover:bg-[#1e9aff] text-white dark:bg-[#328aff] dark:hover:bg-[#1e9aff]" title="Sign Up" description="Enter your credentials to create your account." submitText="Sign Up" closeText="Cancel" labelsAndInputs={[{ label: "Email", type: "email", defaultValue: "example@email.com" }, { label: "Password", type: "password", defaultValue: "" }]} />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <ModeToggle />
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <LuMenu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="start">
            <DropdownMenuLabel>Authenticate</DropdownMenuLabel>
            <DropdownMenuGroup>
              <SheetDemo
                asChild
                title="Log In"
                description="Enter your credentials to access your account."
                submitText="Log In"
                closeText="Cancel"
                labelsAndInputs={[{ label: "Email", type: "email", defaultValue: "example@email.com" }, { label: "Password", type: "password", defaultValue: "" }]}
              >
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  Log In
                </DropdownMenuItem>
              </SheetDemo>
              <SheetDemo
                asChild
                title="Sign Up"
                description="Enter your credentials to create your account."
                submitText="Sign Up"
                closeText="Cancel"
                labelsAndInputs={[{ label: "Email", type: "email", defaultValue: "example@email.com" }, { label: "Password", type: "password", defaultValue: "" }]}
              >
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  Sign Up
                </DropdownMenuItem>
              </SheetDemo>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

export default Navbar