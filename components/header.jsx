import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from "./ui/button";
import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
const Header = () => {
    return (
        <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50
    supports-[backdrop-filter]:bg-background/60'>
            <nav className='container mx-auto flex items-center justify-between px-4 py-2'>
                <Link href="/">
                    <Image src="/logo.png"
                        alt="Logo" width={200} height={60}
                        className="h-12 py-1 w-auto object-contain" />

                </Link>
                <div className='flex items-center space-x-2 md:space-x-4'>
                    <SignedIn>
                        <Link href="/dashboard">
                            <Button>
                                <LayoutDashboard className="h-4 w-4" />
                                <span className='hidden md:block'>Industry Insights</span>
                            </Button>
                        </Link>
                    
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button>
                                <StarsIcon className="h-4 w-4" />
                                <span className='hidden md:block'>Growth Tools</span>
                                <ChevronDown className=" h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href={"/resume"} className='flex items-center gap-2'>
                                    <FileText className="h-4 w-4" />
                                    Resume Builder
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem><Link href={"/ai-cover-letter"} className='flex items-center gap-2'>
                                <PenBox className="h-4 w-4" />
                                Cover Letter
                            </Link></DropdownMenuItem>
                            <DropdownMenuItem><Link href={"/interview"} className='flex items-center gap-2'>
                                <GraduationCap className="h-4 w-4" />
                                Interview Prep
                            </Link></DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                    </SignedIn>
            <SignedOut>
                <SignInButton>
                    <Button variant={"outline"}>
                        Sign In
                    </Button>
                </SignInButton>

            </SignedOut>
            <SignedIn>
                <UserButton appearance={{
                    elements: {
                        avatarBox: "h-10 w-10",
                        userButtonPopoverCard: "shadow-xl",
                        userPreviewMainIdentifier:"font-semibold text-sm",
                    },
                }}/>
            </SignedIn>
                </div>
            </nav>
        </header>
    )
}

export default Header
