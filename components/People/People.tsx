import { PeopleList } from '..';
import styles from '../../styles/styles.module.css';
import dynamic from "next/dynamic";


const People = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className={`${styles.bottom_border} pb-4 flex flex-col gap-2`}>
        <span className="font-bold text-white text-sm">People you can follow</span>
        <PeopleList />
      </div>
      <div className={`${styles.bottom_border} pb-4 flex flex-col gap-2`}>
        <span className="font-bold text-white text-sm">Popular</span>
        <PeopleList />
      </div>
      <div className={`${styles.bottom_border} pb-4 flex flex-col gap-2`}>
        <span className="font-bold text-white text-sm">News Papers & Channels</span>
        <PeopleList />
      </div>
      <div className={` pb-4 flex flex-col gap-2`}>
        <span className="font-bold text-white text-sm">Politicians</span>
        <PeopleList />
      </div>
    </div>
  )
}

export default People