import Image from 'next/image'
import { users } from "@/constants";
import styles from '../../styles/styles.module.css'


const PeopleList = () => {
    return (
        <div>
            {users.slice(0, 3).map((user, index) => (
                <div key={index} className={`flex justify-between items-center bg-footer py-5 px-4 ${index === 0 ? 'rounded-b-none' : index === 1 ? "rounded-t-none rounded-b-none" : 'rounded-t-none'} rounded-2xl ${index === 2 ? "" : styles.bottom_border} `}>
                    <div className="flex gap-3">
                        <Image src={user.avatar} width={60} height={60} alt="user" className="rounded-full" />
                        <div>
                            <p className="font-bold text-sm">{user.first_name} {user.last_name}</p>
                            <p className="text-xs  text-gray-400">{user.username}</p>
                            <p className="text-xs mt-1 text-white">{user.job}</p>
                        </div>
                    </div>
                    <div className="w-100 mt-2">
                        <button className="w-100 px-4 py-1.5 border-orange-400 hover:bg-orange-500 border-[1px] border-solid text-xs rounded-full">+Follow</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PeopleList