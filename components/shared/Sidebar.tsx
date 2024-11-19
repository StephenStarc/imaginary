'use client'
import { navLinks } from '@/constants'
import { SignedIn, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

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
                        {navLinks.map((link) => {
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
                </SignedIn>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar
