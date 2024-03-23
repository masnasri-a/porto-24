import Image from 'next/image'
import React from 'react'
import Profile from '@/../public/profile.png'
import ContactPerson from './contact'

const About = () => {
    return (
        <div className="">
            <div className='flex justify-center pl-72 pr-72 gap-32 pt-24'>
                <div className="side-left flex flex-col w-52 gap-5 justify-center ">
                    <span className='text-sm text-gray-500'>HEY THERE!</span>
                    <span className='text-4xl'>I'M NASRI</span>
                    <span className='text-sm text-gray-500 leading-7'>I'm a Blockchain and Full stack engineer based in Bandung, ID. I’m originally from Central Java, ID . I like to build for the web and make things pretty.</span>
                </div>
                <div className="right-side w-6/12">
                    <Image src={Profile} alt="profile" className='object-cover h-72' />
                </div>
            </div>
            <div className="career flex justify-center mt-32">
                <div className="row w-7/12">
                    <div className="col gap-5  flex md:flex-row flex-col items-center justify-between">
                        <div className="intro flex flex-col text-start gap-3 w-5/12">
                            <span className='text-3xl mt-2'>My Career so far</span>
                            <span className='text-base text-gray-500 leading-7'>Throughout my journey as a software engineer, I've navigated a dynamic landscape of challenges and innovations. From pioneering blockchain solutions for coffee traceability to architecting influencer platforms, each project has honed my skills and expanded my expertise. Proficient in Python, Java, TypeScript, and Go, I've embraced frameworks like Next.js and React.js to deliver robust solutions. Whether as a full-stack developer, data engineer, or researcher, I've remained committed to excellence, ensuring every project achieves its full potential</span>
                        </div>
                        <div className="project-2 flex flex-row text-start gap-3 ">
                            <div className="text-3xl text-gray-600 gap-6 flex flex-col justify-center">
                                <span>Front-End</span>
                                <span>Data Engineer</span>
                                <span>Blockchain</span>
                            </div>
                            <div className="text-3xl text-gray-600 gap-6 flex flex-col justify-center">
                                <span>Machine Learning</span>
                                <span>Research</span>
                                <span>Back-End</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-32">

                <ContactPerson />
            </div>
        </div>
    )
}

export default About