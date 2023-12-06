import React from 'react'
import { users } from '@/constants'
import Image from 'next/image'
import { EditProfileForm } from '@/components'


const EditProfile = () => {
    return (
        <div className='mt-4 px-5 py-5'>
            <div className='flex gap-4'>
                <Image src={users[0].avatar} width={60}
                    height={50}
                    priority
                    alt="profile image"
                    className="rounded-full" />
                <div className='flex flex-col'>
                    <h2><span className='text-[#99a2ab] text-xs'>WELCOME</span>&#128075;</h2>
                    <span className='text-[23px] font-bold'>{users[0].first_name}</span>
                </div>
            </div>
            <EditProfileForm />
        </div>
    )
}

export default EditProfile