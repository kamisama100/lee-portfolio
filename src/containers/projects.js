import React from 'react'
function Projects() {
    return (
        <section className='projects self-center justify-center'>
            <div className='w-full text-center'>
                <h3 className='mx-auto text-[30px] opacity-75 font-roboto font-extrabold tracking-wide '>Personal Projects</h3>
                <p className='text-black text-[22px] opacity-50 tracking-wide mb-[2.5rem]'>Recent Front-end works.</p>
                <div className='flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:gap-y-5 sm:gap-y-5 md:gap-x-5 lg:gap-x-5 w-fit mx-auto'>
                    <div className='space-y-2'>
                        <div className="w-[350px] h-[220px] rounded-2xl bg-[url('./images/p1.PNG')] bg-cover bg-center ">
                            <div className='text-white place-items-center relative opacity-0 transition ease-in-out hover:opacity-100 duration-300 h-full bg-black bg-opacity-60 backdrop-blur-sm grid place-content-center rounded-2xl space-y-2'>
                                <h2 className='w-fit h-fit text-[21px] opacity-80 '>
                                    Build a Brand
                                </h2>
                                <p className='w-[80%] text-[18px] '>
                                    A fully responsive website created using <span className='text-green-500'>React</span>, <span className='text-green-500'>Tailwind</span>, and some <span className='text-green-500'>Libraries</span> for animations
                                </p>
                                <a href='https://kamisama100.github.io/landing-page/' target="_blank" without rel="noreferrer" className='border-b-[1px]' >
                                    Go to Website
                                </a>    
                            </div>
                        </div>
                        <p className='text-[19px] opacity-70'>
                            Landing Page
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <div className="w-[350px] h-[220px] rounded-2xl bg-[url('./images/p2.PNG')] bg-cover bg-center">
                            <div className='text-white place-items-center relative opacity-0 transition ease-in-out hover:opacity-100 duration-300 h-full bg-black bg-opacity-60 backdrop-blur-sm grid place-content-center rounded-2xl space-y-2'>
                                <h2 className='w-fit h-fit text-[21px] opacity-80 '>
                                    Simple Login Form
                                </h2>
                                <p className='w-[80%] text-[18px] '>
                                    A simple login form created using <span className='text-green-500'>HTML</span>, and <span className='text-green-500'>CSS</span>
                                </p>
                                <a href='https://kamisama100.github.io/login-form/' target="_blank" without rel="noreferrer" className='border-b-[1px]' >
                                    Go to Website
                                </a>    
                            </div>
                        </div>
                        <p className='text-[19px] opacity-70'>
                            Login Form
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <div className="w-[350px] h-[220px] rounded-2xl bg-[url('./images/p3.PNG')] bg-cover bg-center">
                            <div className='text-white place-items-center relative opacity-0 transition ease-in-out hover:opacity-100 duration-300 h-full bg-black bg-opacity-60 backdrop-blur-sm grid place-content-center rounded-2xl space-y-2'>
                                <h2 className='w-fit h-fit text-[21px] opacity-80 '>
                                    FCC Certification Project for Responsive Design
                                </h2>
                                <p className='w-[80%] text-[18px] '>
                                    Created using <span className='text-green-500'>HTML</span>, and <span className='text-green-500'>CSS</span>.
                                </p>
                                <a href='https://kamisama100.github.io/fcc-proj/' target="_blank" without rel="noreferrer" className='border-b-[1px]' >
                                    Go to Website
                                </a>    
                            </div>
                        </div>
                        <p className='text-[19px] opacity-70'>
                            FCC Certification Project
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
