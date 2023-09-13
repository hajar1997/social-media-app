'use client';

import { TweetDetailModalProps } from '@/types';
import { Transition, Dialog } from '@headlessui/react';
import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { Fragment } from 'react';


const TweetDetailModal = ({ isOpen, closeModal, tweet }: TweetDetailModalProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className="relative z-10" onClose={closeModal}>
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
                                <Dialog.Panel className="relative w-full max-w-[815px]  transform rounded-2xl bg-black text-white shadow-xl transition-all flex flex-col gap-5">
                                    <div className='flex flex-row'>
                                        <div className='w-[475px] h-[600px]'>
                                            <Carousel>
                                                {tweet.images.map((image) => (
                                                    <Image src={image} width={475} height={600} alt='carousel images' />
                                                ))}
                                            </Carousel>
                                        </div>
                                        <div>
                                            salam
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default TweetDetailModal