import React from 'react'
import { Link } from 'react-scroll';

function NavBarMain() {
    return (
        <div className = "w-full flex text-white">
            <div className='xs:ml-7 sm:ml-[50px] md:ml-10 lg:mr-auto lg:ml-[100px] w-fit font-roboto tracking-[0.02em] font-semibold text-[21px] text-white'>
                <Link
                    activeClass="active"
                    to = "about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500} 
                >
                <p className = "name hover:cursor-pointer">
                    {'< Lee />'} 
                </p>
                </Link>
            </div>
            <div  className = "xs:hidden sm:hidden md:flex lg:flex w-fit ml-auto md:mr-[25px] lg:mr-[50px] self-center mb-2">
                <div className = "flex flex-row gap-7 text-[16px]">
                    <Link className="h-7" 
                        activeClass="active"
                        to = "about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500} 
                    >
                        <p className="underline hover:cursor-pointer font-semibold opacity-80 hover:opacity-100 ">About</p>
                    </Link>
                    <Link className="h-7"
                        activeClass="active"
                        to = "skills"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500} 
                    >
                        <p className="underline hover:cursor-pointer font-semibold opacity-80 hover:opacity-100 ">Skills</p>
                    </Link>
                    <Link className="h-7"
                        activeClass="active"
                        to = "projects"
                        spy={true}
                        smooth={true}
                        offset={-200}
                        duration={500} 
                    >
                        <p className="underline hover:cursor-pointer font-semibold opacity-80 hover:opacity-100 " >Projects</p>
                    </Link>
                    <Link className="h-7"
                        activeClass="active"
                        to = "contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                    >
                        <p className="underline hover:cursor-pointer font-semibold opacity-80 hover:opacity-100 " >Contact</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBarMain
