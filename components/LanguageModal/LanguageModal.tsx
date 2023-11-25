import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { languages } from '@/constants'
import styles from '../../styles/styles.module.css'

const LanguageModal = ({ isOpen, closeModal }: any) => {
    const [selectedId, setSelectedId] = useState(null);

    const handleClick = (id: any) => {
        setSelectedId(id);
    }

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as='div' className="relative z-[10000000000]" onClose={closeModal}>
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
                                <Dialog.Panel className="relative w-full max-w-[480px]  transform lg:rounded-2xl bg-black text-white shadow-xl transition-all flex flex-col gap-5">
                                    <div className='p-[20px]'>
                                        <div className='flex items-center justify-between'>
                                            <h3 className='font-bold'>Choose Language</h3>
                                            <FontAwesomeIcon icon={faClose} onClick={closeModal} className=' text-[22px] text-[#99a2ab] cursor-pointer' />
                                        </div>
                                        <div className='grid lg:grid-cols-3   mt-5 gap-[20px]'>
                                            {languages.map((lang) => (
                                                <div onClick={() => handleClick(lang.id)} key={lang.id} className={`text-center p-3 border border-white rounded-[8px] ${selectedId === lang.id ? "bg-[#e76f51] border-none" : ""} hover:border-none   cursor-pointer`}>
                                                    <span className='text-sm'>{lang.language}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button type='button' className={`${styles.sign_in_btn} rounded-xl mt-[30px] font-semibold text-base py-3 px-4 w-full`}>SUBMIT</button>
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