'use client';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import Link from "next/link";
import { users } from "@/constants";
import Image from "next/image";
import styles from '../../styles/styles.module.css'


const FollowPeopleSlide = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 402,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]
    };
    return (
        <div className={` py-6 p-2`}>
            <div className='flex justify-between items-center'>
                <h4 className="font-bold">Follow People</h4>
                <Link href="#">
                    <FontAwesomeIcon icon={faArrowRight} className="text-[20px]" />
                </Link>
            </div>
            <Slider {...settings}>
                {users.map((user) => (
                    <div key={user.first_name} className={`${styles.slickSlider} ${styles.zero} bg-footer py-5  rounded-2xl  mt-3`}>
                        <Image src={user.avatar} width={60} height={60} alt="user" className="rounded-full" />
                        <div className="text-center">
                            <p className="font-bold text-sm">{user.first_name} {user.last_name}</p>
                            <p className="text-xs text-gray-400">{user.job}</p>
                        </div>
                        <div className="w-100 mt-2">
                            <button className="w-100 px-4 py-1.5 border-orange-400 hover:bg-orange-500 border-[1px] border-solid text-xs rounded-full">+Follow</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default FollowPeopleSlide