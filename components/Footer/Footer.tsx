import Link from 'next/link';
import { BsFacebook, BsGithub, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
const Footer = () => {
  return (
    <footer className="bg-footer footer text-white px-[80px] py-6">
      <div className="flex flex-row justify-between max-[992px]:flex-col-reverse max-[992px]:gap-5 max-[992px]:items-center ">
        <div className="left_side text-xs flex gap-2 ">
          <span>&copy;{new Date().getFullYear()}</span>
          <span>All rights reserved</span>
        </div>
        <div className="right_side flex gap-5">
          <Link href="#">
            <BsFacebook />
          </Link>
          <Link href="#">
            <BsTwitter />
          </Link>
          <Link href="#">
            <BsInstagram />
          </Link>
          <Link href="#">
            <BsGithub />
          </Link>
          <Link href="#">
            <BsYoutube />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer