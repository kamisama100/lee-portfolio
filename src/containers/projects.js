import React from 'react'

function Projects() {
    return (
        <section className='projects self-center justify-center'>
            <div className='w-full text-center'>
                <h3 className='mx-auto text-[30px] opacity-75 font-roboto font-extrabold tracking-wide '>My Recent Projects</h3>
                <p className='text-black text-[22px] opacity-50 tracking-wide mb-[2.5rem]'>Recent Front-end works.</p>
                <div className='flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:gap-y-5 sm:gap-y-5 md:gap-x-5 lg:gap-x-5 w-fit mx-auto'>
                    <div className='w-[350px] h-[200px] rounded-2xl transition ease-in-out delay-75 bg-white hover:bg-black duration-500'>
                    </div>
                    <div className='w-[350px] h-[200px] rounded-2xl transition ease-in-out delay-75 bg-white hover:bg-black duration-500'>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
