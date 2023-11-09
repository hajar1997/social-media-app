import dynamic from 'next/dynamic';
import styles from '../../styles/styles.module.css'

const SearchBar = dynamic(() => import("@/components/SearchBar/SearchBar"));
const Trends = dynamic(() => import("@/components/Trends/Trends"));
const WhoToFollow = dynamic(() => import("@/components/WhoToFollow/WhoToFollow"));

const Sidebar = () => {
    return (
        <aside className={`${styles.sidebar} mt-4 py-4`}>
            <div className={`${styles.fixedSidebar}`}>
                <SearchBar />
                <Trends />
                <WhoToFollow />
            </div>
        </aside>
    )
}

export default Sidebar