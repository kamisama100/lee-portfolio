import React from 'react'

function Projects() {
    return (
        <section className='my-projects self-center items-center justify-center'>
            <div className='w-full text-center'>
                <h3 className='mx-auto text-[30px] opacity-75 font-roboto font-extrabold tracking-wide '>My Recent Projects</h3>
                <p className='text-black text-[22px] opacity-50 tracking-wide mb-[2.5rem]'>Recent Front-end works.</p>
                <div className='grid grid-cols-2 w-fit space-x-3  mx-auto'>
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
