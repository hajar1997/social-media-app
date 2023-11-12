import { ProfileHeader, ProfileTabs } from '@/components'
import { faArrowLeft, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Divider } from 'antd'
import Link from 'next/link'
import React from 'react'

const Profile = () => {
    return (
        <div className='mt-4'>
            <div className=' flex justify-between items-center px-5 py-5'>
                <div className='flex gap-8'>
                    <Link href="/">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-[20px]" />
                    </Link>
                    <p className='font-bold'>Shay Jordon</p>
                </div>
                <Link href="/">
                    <FontAwesomeIcon icon={faShareNodes} className="text-[20px] text-[#99a2ab]" />
                </Link>
            </div>
            <ProfileHeader />
            <Divider />
            <ProfileTabs />
        </div>
    )
}

export default Profile