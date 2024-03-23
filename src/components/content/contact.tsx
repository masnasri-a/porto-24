import React from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const ContactPerson = () => {
    return (
        <div className="bg-[#F2F1EB] w-10/12 md:p-24 p-2 ">
            <div className="content flex flex-col gap-4">
                <span className="text-3xl">
                    Want to get in touch?
                    <br />
                    Drop me a line!
                </span>
                <span className="text-gray-500 mb-5">Don't be afraid to say hi with me 👋🏻</span>
                <div className="form-1 block md:flex justify-between md:gap-5 md:w-7/12 w-full">
                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
                        <Label htmlFor="name">NAME</Label>
                        <Input type="text" id="name" placeholder="Enter your Name" className="rounded-none" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" placeholder="Enter your Email" className="rounded-none" />
                    </div>
                </div>
                <div className="grid md:w-7/12 w-full items-center gap-1.5 mb-5">
                    <Label htmlFor="text">Message</Label>
                    <Textarea placeholder="Type your message here." />
                </div>
                <Button variant="outline" className="w-full md:w-24">Send</Button>
            </div>
        </div>
    )
}

export default ContactPerson