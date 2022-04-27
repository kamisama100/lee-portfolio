import React from 'react'
import skills from '../../images/skills.png';
import mysql from '../../images/mysql.png';
import java from '../../images/java.png';
function OtherSkills() {
    return (
        <div className='text-center pt-2 w-full'>
            <img src={skills} alt = "skills" className='mx-auto w-[120px] mt-5 mb-5'/>
            <h3 className = "text-[25px] font-roboto font-extrabold tracking-wide mb-6">
                Other Skills
            </h3>
            <div className='w-fit mx-auto leading-loose pb-10 font-roboto text-center'>
                <div>
                    <h4 className='text-blue font-bold text-[20px]'>
                        Programming
                    </h4>
                    <div className='flex text-[18px] space-x-2 p-[10px] text-center'>
                        <img src = {java} alt = 'java' className='w-[30px]' />
                        <span>Java</span>
                    </div>
                </div>
                <div>
                    <h4 className='text-blue font-roboto font-bold text-[20px] mt-10'>
                        Database
                    </h4>
                    <div className='flex text-[18px] space-x-2 p-[10px]'>
                        <img src = {mysql} alt = 'mysql' className='w-[30px]'/>
                        <span>MySQL</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OtherSkills
