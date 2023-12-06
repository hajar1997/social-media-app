'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleUser, faCompass, faRightFromBracket, faWindowRestore, faGlobe, faSortDown } from '@fortawesome/free-solid-svg-icons';
import LanguageModal from '../LanguageModal/LanguageModal';
import { Dialog, Transition } from '@headlessui/react';

export default function MobileNavbar({ open, setOpen }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const [ddOpen, setDdOpen] = useState(false);
    const pathName = usePathname();
    const closeMenu = () => {
        setOpen(false);
    };



    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="fixed inset-0 z-[100] overflow-hidden" onClose={setOpen}>
                <div className="flex items-center justify-start min-h-screen">
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-in-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-in-out duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>
                    <Transition.Child
                        as={Fragment}
                        enter="transform ease-in-out duration-300"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform ease-in-out duration-300"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <div className="relative max-w-[20rem] h-[100vh] w-full bg-body p-[30px]">
                            <div className='logo pb-4 mb-4'>
                                <Link prefetch href="/" onClick={closeMenu}>
                                    <Image
                                        src="/logo.png"
                                        width={60}
                                        height={60}
                                        alt='logo'
                                        style={{
                                            width: "60px",
                                            height: "60px"
                                        }}
                                        priority
                                    />
                                </Link>
                            </div>
                            <nav className=" p-3 w-full flex flex-col flex-wrap  dark:bg-gray-800" >
                                <ul className='nav-wrapper flex flex-col gap-x-10'>
                                    <li>
                                        <Link prefetch href="/" onClick={closeMenu} className={`${pathName === '/' ? "active-link" : ""} py-[12px] px-[16px] mb-[9px]`}>
                                            <FontAwesomeIcon className='me-3 text-xl' icon={faHome} />
                                            <span>Feed</span>
                                        </Link></li>
                                    <li>
                                        <Link prefetch href="/profile" onClick={closeMenu} className={`${pathName === '/profile' ? "active-link" : ""} py-[12px] px-[16px] mb-[9px]`}>
                                            <FontAwesomeIcon className='me-3 text-xl' icon={faCircleUser} />
                                            <span>Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link prefetch href="/explore" onClick={closeMenu} className={`${pathName === '/explore' ? "active-link" : ""} py-[12px] px-[16px] mb-[9px]`}>
                                            <FontAwesomeIcon className='me-3 text-xl' icon={faCompass} />
                                            <span>Explore</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" onClick={() => {
                                            setIsOpen(true)
                                        }} className={`py-[12px] px-[16px] mb-[9px]`}>
                                            <FontAwesomeIcon className='me-3 text-xl' icon={faGlobe} />
                                            <span>Language</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" className='py-[12px] px-[16px] mb-[9px] justify-between' onClick={() => setDdOpen((prevOpen: any) => !prevOpen)}>
                                            <div>
                                                <FontAwesomeIcon className='me-3 text-xl' icon={faWindowRestore} />
                                                <span>Pages</span>
                                            </div>
                                            <FontAwesomeIcon icon={faSortDown} />
                                        </Link>
                                        {ddOpen ? (
                                            <div>
                                                <ul>
                                                    <li>
                                                        <Link prefetch href="/contact" onClick={closeMenu} className='py-[7px] px-[14px] sp-text' >Contact</Link>
                                                    </li>
                                                    <li>
                                                        <Link prefetch href="/edit-profile" onClick={closeMenu} className='py-[7px] px-[14px] sp-text'>
                                                            Edit Profile
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        ) : ("")}
                                    </li>
                                    <li>
                                        <Link href="" className='py-[12px] px-[16px] mb-[9px]' onClick={closeMenu}>
                                            <FontAwesomeIcon className='me-3 text-xl' icon={faRightFromBracket} />
                                            <span>Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className='mt-4'>
                                    <button type='button' className={`${styles.sign_in_btn} rounded-xl font-semibold text-base py-3 px-4 w-full`}>Sign In</button>
                                </div>
                            </nav>
                            <LanguageModal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}


