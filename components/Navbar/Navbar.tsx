
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header, MobileNavbar } from '..';

const Navbar = () => {
    return (
        <>
            <Header />
            <div className='lg:hidden flex items-center justify-between px-3 py-3 bg-black w-full'>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        width={45}
                        height={35}
                        alt='logo'
                    />
                </Link>
                <MobileNavbar />
            </div>
        </>
    )
}

export default Navbar