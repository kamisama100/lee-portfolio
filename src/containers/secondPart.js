import React from 'react'
import FrontSkills from '../components/secondPartComp/frontSkills'
import OtherSkills from '../components/secondPartComp/otherSkills'

function SecondPart() {
    return (
        <section className = "skills">
            <div className='grid xs:grid-flow-row md:grid-flow-col-dense lg:grid-cols-50/50 md:divide-x lg:divide-x divide-slate-500 divide-opacity-25 border-[1px] border-slate-500 border-opacity-25 bg-white rounded-2xl xs:w-[100%] sm:w-[90%] md-[85%] lg:w-[85%] mx-auto'>
                <section className='Front Skills'>
                    <div className='xs:row-span-1 md:col-span-1'>
                        <FrontSkills/>
                    </div>
                </section>
                <section className='Other SKills'>
                    <div className='xs:row-span-2 md:col-span-2'>
                        <OtherSkills/>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default SecondPart
