'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCircleUser, faCompass, faRightFromBracket, faWindowRestore, faGlobe, faSortDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <header className={`${styles.navbar} py-4 mt-4`}>
                <nav>
                    <div className='logo pb-4 mb-4'>
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                width={60}
                                height={60}
                                alt='logo'
                            />
                        </Link>
                    </div>
                    <ul className='nav-wrapper flex flex-col gap-x-10'>
                        <li>
                            <Link href="" className='py-[12px] px-[16px] mb-[9px]'>
                                <FontAwesomeIcon className='me-3 text-xl' icon={faHome} />
                                <span>Feed</span>
                            </Link></li>
                        <li>
                            <Link href="" className='py-[12px] px-[16px] mb-[9px]'>
                                <FontAwesomeIcon className='me-3 text-xl' icon={faCircleUser} />
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="" className='py-[12px] px-[16px] mb-[9px]'>
                                <FontAwesomeIcon className='me-3 text-xl' icon={faCompass} />
                                <span>Explore</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="" className='py-[12px] px-[16px] mb-[9px]'>
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
                                            <Link href="" className='py-[7px] px-[14px] sp-text' >Contact</Link>
                                        </li>
                                        <li>
                                            <Link href="" className='py-[7px] px-[14px] sp-text'>
                                                FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='py-[7px] px-[14px] sp-text'>
                                                404 Error
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="" className='py-[7px] px-[14px] sp-text'>
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
                </nav>
                <div className='mt-4'>
                    <button type='button' className={`${styles.sign_in_btn} rounded-xl font-semibold text-base py-3 px-4 w-full`}>Sign In</button>
                </div>
            </header>
        </>
    )
}

export default Navbar