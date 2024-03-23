import React from 'react'
import Image from 'next/image'
import ICEMobile from '@/../public/ice-mobile.png'
import ICEDesktop from '@/../public/ice-desktop.png'
import Kommu from '@/../public/kommu.png'
import redAI from '@/../public/redai.png'
import CareerDesktop from '@/../public/salt-desktop.png'
import CareerMobile from '@/../public/salt-mobile.png'
import ContactPerson from './contact'

const HomeMenu = () => {
    const companies = [
        {
            title: 'Ebdesk Technology',
            role: 'Backend and Data Engineer',
            date: 'July 2020 - Aug 2023'
        }, {
            title: 'IDN Media x GGWP (part-time)',
            role: 'Blockchain and Software Engineer',
            date: 'Feb 2022 - Present'
        }, {
            title: 'Salt.ID',
            role: 'Backend Engineer',
            date: 'Oct 2023 - Present'
        }
    ]
    return (
        <div className="flex justify-center flex-col items-center mt-44">
            <div className="introduce flex flex-col w-7/12 md:text-left text-center">
                <span className="text-xl font-normal">Nasri Adzlani</span>
                <span className="text-base text-gray-500">Software Engineer</span>
                <span className='md:text-[60px] text-[36px]'>Hey there! I'm a software engineer based in Indonesia. </span>
            </div>
            <div className="work p-5 mt-28">
                <div className="row">
                    <div className="col gap-5 flex md:flex-row flex-col">
                        <div className="project-1 flex flex-col text-center gap-3">
                            <Image src={ICEDesktop} alt="ice-desktop" className="hidden md:block h-[460px] cursor-pointer object-cover w-[845px]" />
                            <Image src={ICEMobile} alt="ice-mobile" className="md:hidden block h-[460px] object-cover w-[490px]" />
                            <span className='font-normal mt-2'>ICE</span>
                            <span className='text-base text-gray-500'>Content Creator Platform</span>
                        </div>
                        <div className="project-2 flex flex-col text-center gap-3">
                            <Image src={Kommu} alt="ice-mobile" className="h-[460px] object-top object-cover w-[490px]" />
                            <span className='font-normal mt-2'>Kommu</span>
                            <span className='text-base text-gray-500'>Blockchain Coffee Tracker</span>
                        </div>
                    </div>
                </div>
                <div className="row mt-28">
                    <div className="col gap-5 flex md:flex-row flex-col">
                        <div className="project-2 flex flex-col text-center gap-3">
                            <Image src={redAI} alt="ice-mobile" className="h-[460px] object-top object-cover w-[490px]" />
                            <span className='font-normal mt-2'>RedAI</span>
                            <span className='text-base text-gray-500'>Generative AI platform</span>
                        </div>
                        <div className="project-1 flex flex-col text-center gap-3">
                            <Image src={CareerDesktop} alt="ice-desktop" className="hidden md:block h-[460px] duration-100  object-cover w-[845px]" />
                            <Image src={CareerMobile} alt="ice-mobile" className="md:hidden block h-[460px] duration-100 object-cover w-[845px]" />

                            <span className='font-normal mt-2'>Salt Career</span>
                            <span className='text-base text-gray-500'>Employee recruitment platform</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="experience md:w-7/12 mt-44 w-10/12">
                <p className='text-4xl mb-5'>My Experience</p>
                <span className='text-base text-gray-500 '>As a versatile software engineer, I've led diverse projects, from blockchain-based coffee tracking to influencer platforms. Proficient in Python, Java, TypeScript, and Go, I've crafted solutions with Next.js and React.js. My career spans full-stack development, data engineering, and research, ensuring optimal performance and client satisfaction. With a track record of 98% project success, I continuously explore new technologies, contributing to efficient code and impactful applications. Holding a degree in Computer Science, I also leverage personal projects, such as REST API generators, Social Media Scraper, etc.</span>
            </div>
            <div className="company md:flex block justify-between w-7/12 mt-20 gap-5 mb-20">
                {
                    companies.map((company, index) => (
                        <div className="company-item flex flex-col gap-2 mt-5" key={index}>
                            <span className="text-xl">{company.title}</span>
                            <span className="text-gray-500">{company.role}</span>
                            <span className="text-gray-400 text-xs">{company.date}</span>
                        </div>
                    ))
                }
            </div>
            <ContactPerson />
        </div>
    )
}

export default HomeMenu