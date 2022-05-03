import React from 'react'
import menu from '../../images/menu.png'
import { Link } from 'react-scroll';

function NavBarMenu() {
    return (
        <div className='font-roboto'>
            <button id ="dropdownDefault" data-dropdown-toggle="dropdown" className='mb-[1rem] ml-auto' type="button" >
                <span class="sr-only">Open user menu</span>
                <img src={menu} alt="mobile menu" class = "w-[40px] h-[35px] opacity-80 hover:opacity-100"/>
            </button>
            <div id="dropdown" className='hidden absolute z-30'>
                <div className='text-[18px] bg-white items-center flex flex-col rounded p-2 space-y-5 w-[200px] text-black' aria-labelledby="dropdownDefault">
                    <Link className="h-7 underline hover:cursor-pointer w-full text-center"
                        activeClass="active"
                        to = "about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500} 
                    >
                        <p className="font-semibold">About</p>
                    </Link>
                    <Link className="h-7 underline hover:cursor-pointer w-full text-center" 
                        activeClass="active"
                        to = "skills"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500} 
                    >
                        <p className="font-semibold opacity-80 hover:opacity-100 ">Skills</p>
                    </Link>
                    <Link className="h-7 underline hover:cursor-pointer w-full text-center"
                        activeClass="active"
                        to = "projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500} 
                    >
                        <p className="font-semibold opacity-80 hover:opacity-100 " >Projects</p>
                    </Link>
                    <Link className="h-7 underline hover:cursor-pointer w-full text-center"
                        activeClass="active"
                        to = "contacts"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} 
                    >
                        <p className="font-semibold opacity-80 hover:opacity-100 " >Contact</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NavBarMenu
