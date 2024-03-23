import Link from 'next/link'
import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { FaAlignRight } from 'react-icons/fa'

const Headers = () => {
    return (
        <header className="flex justify-between pt-4 md:ml-10 ml-5 md:mr-10 mr-5 items-center">
            <Link href="/" className="text-2xl font-bold">Portofolio</Link>
            <div className="menu gap-4 hidden md:block">
                <div className="menus flex gap-4">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
            <div className="md:hidden" >
                <Sheet>
                    <SheetTrigger><FaAlignRight /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}

export default Headers