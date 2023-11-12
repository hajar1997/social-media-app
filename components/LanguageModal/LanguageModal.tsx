import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const LanguageModal = ({ isOpen, closeModal }: any) => {
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
                        <div className='flex min-h-full items-center justify-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-in duration-200'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'>
                                <Dialog.Panel className="relative w-full max-w-[500px]  transform lg:rounded-2xl bg-black text-white shadow-xl transition-all flex flex-col gap-5">
                                    <div className='p-[20px]'>
                                        <h3 className='font-bold'>Choose Language</h3>
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

export default LanguageModal