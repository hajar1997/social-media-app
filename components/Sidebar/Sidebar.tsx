import { SearchBar, Trends, WhoToFollow } from '..'
import styles from '../../styles/styles.module.css'

const Sidebar = () => {
    return (
        <div className={`${styles.sidebar} mt-4 py-4`}>
            <SearchBar />
            <Trends />
            <WhoToFollow />
        </div>
    )
}

export default Sidebar