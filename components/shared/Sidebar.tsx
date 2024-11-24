'use client'
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href="/" className='sidebar-logo'>
                <Image src="/assets/images/logo-text.svg" alt="logo" width={170} height={36} />
            </Link>
            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav-elements'>
                        {navLinks.slice(0, 6).map((link) => {
                            const isActive = pathname === link.route;
                            return (
                                <li key={link.label} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-500'}`}>
                                    <Link className='sidebar-link' href={link.route}>
                                    <Image src={link.icon} alt={link.label} width={24} height={24} className={`${isActive && 'brightness-0 invert'}`}/>
                                    {link.label}
                                </Link>
                                </li>
                            )
                        })}
                        </ul>
                        <ul className='sidebar-nav_elements'>
                        {navLinks.slice(6).map((link) => {
                            const isActive = pathname === link.route;
                            return (
                                <li key={link.label} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-500'}`}>
                                    <Link className='sidebar-link' href={link.route}>
                                    <Image src={link.icon} alt={link.label} width={24} height={24} className={`${isActive && 'brightness-0 invert'}`}/>
                                    {link.label}
                                </Link>
                                </li>
                            )
                        })}
                        <li className='flex cursor-pointer gap-2 p-4 '>
                            <UserButton showName={true} />
                        </li>
                    </ul>
                </SignedIn>

                <SignedOut>
                        
                        <Button asChild className='button bg-purple-gradient bg-color'>
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                   
                </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar
