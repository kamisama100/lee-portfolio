import React from 'react'

function Contact() {
    return (
        <section className='Contact'>
            <div className='w-full text-center xs:pb-4 xs:pt-5 xs:p-0 sm:p-10 md:p-12 lg:p-14'>
                <h3 className='mx-auto text-[30px] opacity-75 font-roboto font-extrabold tracking-wider'>Contact</h3>
                <span className='xs:text-[21px] sm:text-[23px] leading-loose opacity-80 tracking-wide font-roboto cursor-pointer transition ease-out delay-75 hover:opacity-60 duration-300'> 
                    delutejohnz@gmail.com 
                </span>
                <br/>
                <span className='xs:text-[21px] sm:text-[23px] leading-loose opacity-80 tracking-wide font-roboto cursor-pointer transition ease-out delay-75 hover:opacity-60 duration-300'> 
                    github.com/kamisama100
                </span>
            </div>
            <div className='grid grid-cols-4 w-fit space-x-3  mx-auto'>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </section>
    )
}
export default Contact
