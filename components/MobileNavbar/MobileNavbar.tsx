'use client';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleUser, faCompass, faRightFromBracket, faWindowRestore, faGlobe, faSortDown } from '@fortawesome/free-solid-svg-icons';
import LanguageModal from '../LanguageModal/LanguageModal';

export default function MobileNavbar() {
    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();


    useEffect(() => {
        require('preline');
    }, []);

    return (
        <div>
            <button type="button" className="bg-[#e76f51] py-[5px] px-[10px] mr-[13px] rounded" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
                <svg className="w-5 h-5" fill="#ececec" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            <div id="docs-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 left-0 bottom-0 z-[10000000] w-64 bg-body pt-7 pb-10 overflow-hidden scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700">
                <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                    <div className='logo pb-4 mb-4'>
                        <Link href="/">
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
                    <ul className='nav-wrapper flex flex-col gap-x-10'>
                        <li>
                            <Link href="/" className={`${pathName === '/' ? "active-link" : ""} py-[12px] px-[16px] mb-[9px]`}>
                                <FontAwesomeIcon className='me-3 text-xl' icon={faHome} />
                                <span>Feed</span>
                            </Link></li>
                        <li>
                            <Link href="/profile" className={`${pathName === '/profile' ? "active-link" : ""} py-[12px] px-[16px] mb-[9px]`}>
                                <FontAwesomeIcon className='me-3 text-xl' icon={faCircleUser} />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/explore" className={`${pathName === '/explore' ? "active-link" : ""} py-[12px] px-[16px] mb-[9px]`}>
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
                            <Link href="" className='py-[12px] px-[16px] mb-[9px] justify-between' onClick={() => setOpen((prevOpen) => !prevOpen)}>
                                <div>
                                    <FontAwesomeIcon className='me-3 text-xl' icon={faWindowRestore} />
                                    <span>Pages</span>
                                </div>
                                <FontAwesomeIcon icon={faSortDown} />
                            </Link>
                            {open ? (
                                <div>
                                    <ul>
                                        <li>
                                            <Link href="/contact" className='py-[7px] px-[14px] sp-text' >Contact</Link>
                                        </li>
                                        <li>
                                            <Link href="/faq" className='py-[7px] px-[14px] sp-text'>
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/edit-profile" className='py-[7px] px-[14px] sp-text'>
                                                Edit Profile
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            ) : ("")}
                        </li>
                        <li>
                            <Link href="" className='py-[12px] px-[16px] mb-[9px]'>
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
        </div>

    )
}
