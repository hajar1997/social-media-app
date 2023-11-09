import dynamic from 'next/dynamic';
import styles from '../../styles/styles.module.css'

const PeopleList = dynamic(() => import("@/components/PeopleList/PeopleList"));
const WhoToFollow = () => {
    return (
        <div className="rounded-xl bg-footer mt-4">
            <div className={`${styles.bottom_border} p-3.5`}>
                <span className={`text-[#ececec] text-sm font-bold`}>Who to Follow</span>
            </div>
            <PeopleList />
        </div>
    )
}

export default WhoToFollow