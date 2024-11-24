'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from "next/link"
import Image from "next/image"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { navLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className='header'>
       <Link href="/" className="flex items-center gap-2 md:py-2">
            <Image src="/assets/images/logo-text.svg" alt="logo" width={170} height={36} />
        </Link>
        <nav className="flex gap-5">
            <SignedIn>
                <UserButton />
                <Sheet>
                    <SheetTrigger>
                        <Image src="/assets/icons/menu.svg" alt="menu" width={32} height={32} className="cursor-pointer"/>
                    </SheetTrigger>
                    <SheetContent className="sheet-content sw:w-64">
                        <>
                            <Image src="/assets/images/logo-text.svg" alt="logo" width={170} height={36} className="cursor-pointer"/>
                            <ul className='header-nav_elements'>
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.route;
                                    return (
                                <li key={link.label} 
                                className={`${isActive && 'gradient-text'} p-18 flex whitespace-nowrap text-dark-700`}>
                                    <Link className='sidebar-link cursor-pointer' href={link.route}>
                                    <Image src={link.icon} alt={link.label} width={24} height={24} />
                                    {link.label}
                                </Link>
                                </li>
                            )
                                })}
                            </ul>
                        </>
                    </SheetContent>
</Sheet>
            </SignedIn>
            <SignedOut>
                        
                        <Button asChild className='button bg-purple-gradient bg-color'>
                            <Link href="/sign-in">
                                Login
                            </Link>
                        </Button>
                   
                </SignedOut>
        </nav>
    </header>
  )
}

export default MobileNav
