import React from 'react'
import NavBarMain from '../components/navBar/navBarMain'
import NavBarMenu from '../components/navBar/navBarMenu'
function NavBar() {
    return (
        <nav className = "xs:fixed xs:w-full sm:sticky sm:top-0 md:sticky md:top-0 lg:sticky lg:top-0 flex bg-blue p-7 font-mainFont h-[5rem] z-50">
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
