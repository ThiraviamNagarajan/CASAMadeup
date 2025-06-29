import React from 'react'
import InputField from '../../Common Components/Input'
import DynamicButton from '../../Common Components/Button'

const Newuser = () => {
  return (
    <div className='p-[30px]  border-[1px] border-[#333333] flex flex-col gap-[15px]'>
        <div className='text-[24px] text-[#333333]'>My Profile</div>
        <div className='flex flex-col gap-[15px]'>
            <div className='w-full flex gap-[10px]'>
            <InputField placeholder='First Name'/>
            <InputField placeholder='Last Name'/>
            </div>
            <InputField placeholder='Email'/>
            <InputField placeholder='PhoneNumber'/>
            <InputField placeholder='Password'/>
            <InputField placeholder='Confirm Password'/>
        </div>
        <div className='flex justify-end'>
        <DynamicButton width='240px' padding='px-[20px] py-[14px]' Backgroundcolor='#333333'>ADD NEW ADDRESS</DynamicButton>
        </div>
    </div>
  )
}

export default Newuser