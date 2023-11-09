'use client'
import React from 'react'
import { users } from '@/constants';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import img from '../../public/rmate2.jpg'
import Link from 'next/link'
import { faCalendar, faLink } from '@fortawesome/free-solid-svg-icons'

const ProfileHeader = () => {
  return (
    <div className='mt-6 px-5'>
      <div className="mt-3 lg:p-5 p-4 bg-footer w-full rounded-[1.3rem] gap-4">
        <div className='flex gap-3 items-center'>
          <Image
            src={img}
            aria-hidden={true}
            width={60}
            height={50}
            priority
            alt="profile image"
            className="rounded-full"
          />
          <div>
            <Link href="/profile">
              <h6 className="text-sm font-bold">Shay Jordon</h6>
            </Link>
            <Link href="/profile">
              <span className="text-xs text-[#99a2ab]">@shay-jordon</span>
            </Link>
          </div>
        </div>
        <div className='mt-4'>
          <p className='text-[15px]'>The standard chunk of Lorem Ipsum used since is reproduced. Contrary to popular belief,
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature..</p>
        </div>
        <div className='mt-2 flex gap-10 items-center'>
          <div className='flex gap-3 items-center'>
            <FontAwesomeIcon icon={faLink} className='text-[#99a2ab] text-[12px]' />
            <Link href="/profile" className="text-[#e76f51] text-[12px]">
              profile/shayjordon
            </Link>
          </div>
          <div className='flex gap-3 items-center'>
            <FontAwesomeIcon icon={faCalendar} className='text-[#99a2ab] text-[12px]' />
            <span className="text-[#99a2ab] text-[12px]">
              Joined on Feb 2023
            </span>
          </div>
        </div>
        <div className='mt-4 flex gap-20'>
          <div className='flex flex-col gap-1'>
            <p className='text-[13px]'>391k <span className='text-[#99a2ab]'>Followers</span></p>
            <Avatar.Group>
              {users.slice(0, 5).map((user) => (
                <Avatar src={user.avatar} />
              ))}
            </Avatar.Group>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-[13px]'>3  <span className='text-[#99a2ab]'>Following</span></p>
            <Avatar.Group>
              {users.slice(0, 3).map((user) => (
                <Avatar src={user.avatar} />
              ))}
            </Avatar.Group>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader