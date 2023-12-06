'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, MobileNavbar } from '..';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Navbar />
            <div className='lg:hidden flex items-center justify-between px-3 py-3 bg-black w-full'>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        width={45}
                        height={35}
                        alt='logo'
                        style={{
                            width: "45px",
                            height: "35px"
                        }}
                    />
                </Link>
                <button type="button" onClick={() => setOpen((prevOpen) => !prevOpen)} className="bg-[#e76f51] py-[5px] px-[10px] mr-[13px] rounded" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
                    <svg className="w-5 h-5" fill="#ececec" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </button>
            </div>
            <MobileNavbar open={open} setOpen={setOpen} />
        </>
    )
}

export default Header