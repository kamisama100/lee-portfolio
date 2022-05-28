import React from 'react'
import me from '../images/me.jpg'

function FirstPart() {
    return (
    <section className="introduction xs:mt-[90px] lg:mt-[70px]">
        <div className = "xs:flex-col lg:grid lg:grid-cols-2 p-0 pt-0 pl:0 lg:p-5 lg:pt-[7rem] lg:pl-[8rem]">
            <div className = "flex flex-col font-roboto gap-2 p-2 pt-5 lg:pt-0 lg:p-0 xs:text-center sm:text-center lg:text-justify w-full justify-center">
                <p className = "type text-[28px] font-extrabold mx-auto lg:ml-0 opacity-80">
                    Hi, I'm <span className='text-blue opacity-100'>Lee</span>
                </p>
                <p className = "mb-4 lg:mb-0 xs:text-[21px] sm:text-[24px] md:text-[23px] lg:text-[25px] sm:p-0 md:pl-16 md:pr-16 lg:pl-0 lg:pr-0 opacity-75 xs:tracking-wide md:tracking-normal lg:tracking-normal">
                    An aspiring front-end developer with a goal of improving, make use of knowledge learned, and to work with variety of people and learn from them.
                </p>
            </div>
            <div className = " xs:mt-2 md:ml-2 ">
                <img className='h-80 w-[320px] xs:animate-none lg:animate-bounce-slow xs:mx-auto sm:mx-auto rounded-full ' alt = "prog" src = {me}/>
            </div>
        </div>
    </section>
    )
}

export default FirstPart
