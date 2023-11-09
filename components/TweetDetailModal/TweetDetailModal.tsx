'use client';

import { TweetDetailModalProps } from '@/types';
import { faCircle, faClose, faComment, faCircleUser, faRetweet, faShareNodes, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Transition, Dialog } from '@headlessui/react';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { Fragment } from 'react';
import styles from '../../styles/styles.module.css';
import Link from 'next/link';
import { tweet_replies } from '@/constants';


const TweetDetailModal = ({ isOpen, closeModal, tweet }: TweetDetailModalProps) => {
    const controlValue = tweet?.images.length > 1
        ? ""
        : " "
    return (

        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className="relative z-[1000]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'>
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>
                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'>
                                <Dialog.Panel className="relative w-full max-w-[815px]  transform lg:rounded-2xl bg-black text-white shadow-xl transition-all flex flex-col gap-5">
                                    <div className='flex lg:flex-row flex-col p-5 lg:p-0'>
                                        <div className='lg:w-7/12 lg:h-[600px] h-[350px] w-100 lg:static relative'>
                                            <Carousel indicators={tweet.images.length === 1 ? false : true} leftControl={controlValue} rightControl={controlValue} className='lg:[&>*:first-child]:rounded-r-none [&>*:first-child]:rounded-none' >
                                                {
                                                    tweet.images.map((image, index) => (
                                                        <Image src={image} width={475} height={600} alt='carousel images' priority key={index}  />
                                                    ))
                                                }
                                            </Carousel>
                                        </div>
                                        <div className='lg:w-5/12 lg:h-[600px] h-[450px] w-100 flex flex-col'>
                                            <div className={`flex flex-col ${styles.bottom_border}`}>
                                                <div className={`p-3 flex justify-between items-center `}>
                                                    <div className='flex gap-3'>
                                                        <Image src={tweet.profile_image} width={40} height={40} priority className='rounded-full' alt='profile image' />
                                                        <div className='flex flex-col'>
                                                            <Link href="#" prefetch className='font-bold text-sm'>
                                                                {tweet.name}
                                                            </Link>
                                                            <Link href="#" prefetch className='text-xs text-[#99a2ab]'>
                                                                {tweet.username}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <FontAwesomeIcon icon={faClose} onClick={closeModal} className=' text-[22px] text-[#99a2ab] cursor-pointer' />
                                                </div>
                                                <div className='flex flex-col gap-2 p-3 text-left'>
                                                    <p className='text-sm'>{tweet.tweet}</p>
                                                    <div className='flex items-center gap-1'>
                                                        <div className='flex items-center gap-1'>
                                                            <p className='text-xs text-[#99a2ab]'>{tweet.time}</p>
                                                            <FontAwesomeIcon className='text-[2px] text-[#99a2ab]' icon={faCircle} />
                                                        </div>
                                                        <div className='flex items-center gap-1'>
                                                            <p className='text-xs text-[#99a2ab]'>{`${tweet.date},${tweet.year} `}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={` ${styles.bottom_border} p-3 flex  justify-between`}>
                                                <div className="flex items-center gap-2 cursor-pointer">
                                                    <FontAwesomeIcon icon={faThumbsUp} className="text-[17px] text-[#99a2ab]" />
                                                    <span className="text-[#99a2ab] text-xs">30.4K</span>
                                                </div>
                                                <div className="flex items-center gap-2 cursor-pointer">
                                                    <FontAwesomeIcon icon={faComment} className="text-[17px] text-[#99a2ab]" />
                                                    <span className="text-[#99a2ab] text-xs">4.0K</span>
                                                </div>
                                                <div className="flex items-center gap-2 cursor-pointer">
                                                    <FontAwesomeIcon icon={faRetweet} className="text-[17px] text-[#99a2ab]" />
                                                    <span className="text-[#99a2ab] text-xs">617</span>
                                                </div>
                                                <div className="flex items-center gap-2 cursor-pointer">
                                                    <FontAwesomeIcon icon={faShareNodes} className="text-[17px] text-[#99a2ab]" />
                                                    <span className="text-[#99a2ab] text-xs">Share</span>
                                                </div>
                                            </div>
                                            <div className={` ${styles.bottom_border} p-3 flex  justify-between`}>
                                                <div className="bg-footer w-full py-3 px-5 rounded-[1.3rem] flex justify-between">
                                                    <div className="flex gap-2.5 w-full justify-between">
                                                        <FontAwesomeIcon icon={faCircleUser} className="text-[24px] orange-color" />
                                                        <div className="focus:ring-0  focus:ring-offset-0 text-sm bg-footer w-full">
                                                            <div className="px-4 bg-footer">
                                                                <textarea id="comment" className="focus:ring-offset-0 py-0 bg-footer w-full px-0 text-sm text-white border-0 focus:ring-0 resize-none overflow-y-hidden placeholder:text-[#ecececb6]" placeholder="Post your reply" required defaultValue={""} />
                                                            </div>
                                                            <div className="flex pl-0 mt-0 space-x-1 sm:pl-2">
                                                                <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                                                        <path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6" />
                                                                    </svg>
                                                                    <span className="sr-only">Attach file</span>
                                                                </button>
                                                                <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                                        <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                                                    </svg>
                                                                    <span className="sr-only">Set location</span>
                                                                </button>
                                                                <button type="button" className="inline-flex justify-center items-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                                                                    </svg>
                                                                    <span className="sr-only">Upload image</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <Link href="#" className='orange-color text-sm font-bold'>
                                                        Reply
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="px-[1.26rem]  py-3 flex flex-col gap-4 overflow-y-auto custom_scrollbar ">
                                                {tweet_replies.map((replies, index) => (
                                                    <div className="flex mb-2 gap-2" key={index}>
                                                        <div>
                                                            <Image src={replies.profile_image} width={36} height={36}  alt='profile img' className='rounded-full' />
                                                        </div>
                                                        <div className='flex w-full flex-col'>
                                                            <div className='flex flex-col bg-body px-3 gap-1 py-3 text-left rounded-xl w-full'>
                                                                <span className='text-xs font-medium'>{replies.name}</span>
                                                                <span className='text-xs text-[#99a2ab]'>{replies.reply}</span>
                                                            </div>
                                                            <div className='flex mt-2 justify-between items-center'>
                                                                <Link href="#">
                                                                    <div className="ms-3 flex items-center gap-2">
                                                                        <FontAwesomeIcon icon={faThumbsUp} className="text-[11px] text-[#99a2ab]" />
                                                                        <span className="text-[#99a2ab] text-[11px]">1</span>
                                                                    </div>
                                                                </Link>
                                                                <Link href="">
                                                                    <div className="flex items-center gap-2">
                                                                        <FontAwesomeIcon icon={faComment} className="text-[11px] text-[#99a2ab]" />
                                                                        <span className="text-[#99a2ab] text-[11px]"></span>
                                                                    </div>
                                                                </Link>
                                                                <Link href="">
                                                                    <div className="flex items-center gap-2">
                                                                        <FontAwesomeIcon icon={faRetweet} className="text-[11px] text-[#99a2ab]" />
                                                                        <span className="text-[#99a2ab] text-[11px]"></span>
                                                                    </div>
                                                                </Link>
                                                                <span className='mt-1 mr-3 text-[9px] text-[#99a2ab]'>
                                                                    {replies.date}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}

export default TweetDetailModal