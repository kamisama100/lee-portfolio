import React from 'react'
import NavBarMain from '../components/navBar/navBarMain'
import NavBarMenu from '../components/navBar/navBarMenu'
function NavBar() {
    return (
        <nav className = "flex bg-blue p-7 font-mainFont h-[5rem]">
            <div className='w-full'>
                <NavBarMain/>
            </div>
            <div className='xs:flex sm:flex md:hidden lg:hidden'>
                <NavBarMenu/>
            </div>
        </nav>
    )
}

export default NavBar
