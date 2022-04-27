import React from 'react'
import coding from '../../images/coding.png'
import html from '../../images/html5.png'
import css3 from '../../images/css3.png'
import js from '../../images/js.png'
import reactJS from '../../images/react.png'
import responsive from '../../images/responsive.png'
import tailwind from '../../images/tailwind.png'
import mui from '../../images/mui.png'
import bootstrap from '../../images/bootstrap.png'

function FrontSkills() {
    return (
        <div className='mx-auto text-center pt-2 w-full'>
            <img src={coding} alt = "coding" className='mx-auto w-[120px] mt-5 mb-5'/>
            <h3 className = "text-[25px] font-roboto font-extrabold tracking-wide mb-6">
                Front-End Skills
            </h3>
            <div className = "text-[18px] inline-block w-fit leading-loose pb-10 font-roboto">
                <div className='flex space-x-2 p-[10px] pl-[50px]'>
                    <img src = {html} alt = 'html' className='w-[30px]' />
                    <span>HTML5</span>
                </div>
                <div className='flex space-x-2 p-[10px] pl-[50px]'>
                    <img src = {css3} alt = 'css3' className='w-[30px]' />
                    <span>CSS3</span>
                </div>
                <div className='flex space-x-2 p-[10px] pl-[50px]'>
                    <img src = {js} alt = 'js' className='w-[30px]' />
                    <span>JavaScript</span>
                </div>
                <div className='flex space-x-2 p-[10px] pl-[50px]'>
                    <img src = {responsive} alt = 'responsive' className='w-[30px]' />
                    <span>Responsive Design</span>
                </div>
                <div className='flex space-x-2 p-[10px] pl-[50px]'>
                    <img src = {reactJS} alt = 'reactJS' className='w-[30px]' />
                    <span>ReactJS</span>
                </div>
                <div className='border-t-[1px] border-black border-solid border-opacity-30 mb-1 mt-1 pt-1'>
                    <span>I also use CSS Frameworks like: </span>
                </div>
                <div className='flex flex-row gap-4 place-content-center'>
                    <div><img src = {tailwind} className='w-[30px]' alt = 'tailwind' title="Tailwind" /></div>
                    <div><img src = {bootstrap} className='w-[30px]' alt = 'bootstrap' title="Bootstrap" /></div>
                    <div><img src = {mui} className='w-[30px]' alt = 'mui' title="Material UI" /></div>
                </div>
            </div>
        </div>
    )
}

export default FrontSkills
