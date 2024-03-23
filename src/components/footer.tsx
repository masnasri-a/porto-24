import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa6'

const FooterMenu = () => {
    return (
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center w-screen pt-24 pl-24 pr-24 pb-10">
            <span>
                Made with ❤️ by nasri
            </span>
            <div className="right flex gap-3">
                <Link href={"https://www.instagram.com/nasriadzlani/"} ><FaInstagram /></Link>
                <Link href={"https://web.facebook.com/Nasricakarevo/"} ><FaFacebook /></Link>
                <Link href={"https://www.linkedin.com/in/nasri-adzlani-477620165/"} ><FaLinkedin /></Link>
                <Link href={"https://nasriadzlani.medium.com/"} ><FaMedium /></Link>
            </div>
        </div>
    )
}

export default FooterMenu