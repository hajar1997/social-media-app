import { SearchBar, Trends, WhoToFollow } from '..'
import styles from '../../styles/styles.module.css'


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