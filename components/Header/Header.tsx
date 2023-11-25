import Link from 'next/link';
import Image from 'next/image';
import { Navbar, MobileNavbar } from '..';

const Header = () => {

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
                <MobileNavbar />
            </div>
        </>
    )
}

export default Header