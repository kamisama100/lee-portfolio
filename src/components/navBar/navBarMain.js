import React from 'react'

function NavBarMain() {
    return (
        <div className = "w-full flex text-white">
            <div className='xs:ml-7 sm:ml-[50px] md:ml-10 lg:mr-auto lg:ml-[100px] w-fit font-roboto tracking-[0.02em] font-semibold text-[21px] text-white'>
                <p className = "name hover:cursor-pointer">
                    {'< Lee />'} 
                </p>
            </div>
            <div  className = "xs:hidden sm:hidden md:flex lg:flex w-fit ml-auto md:mr-[25px] lg:mr-[50px] self-center mb-2">
                <ul className = "flex flex-row gap-7 text-[16px]">
                    <li className="h-7">
                        <p className="underline hover:cursor-pointer font-semibold duration-300 ">About</p>
                    </li>
                    <li className="h-7">
                        <p className="underline hover:cursor-pointer font-semibold opacity-80 hover:opacity-100 ">Skills</p>
                    </li>
                    <li className="h-7">
                        <p className="underline hover:cursor-pointer font-semibold opacity-80 hover:opacity-100 " >Projects</p>
                    </li>
                    <li className="h-7">
                        <p className="underline hover:cursor-pointer font-semibold opacity-80 hover:opacity-100 " >Contact</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBarMain
