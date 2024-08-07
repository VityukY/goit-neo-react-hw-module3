import {useId} from 'react'
import styles from './SearchBox.module.css'
export default function SearchBox ({value,filterHandler}) {
    const searchFiled = useId()
    return <div className={styles.searchBox}><label htmlFor="searchFiled">Search Box</label>
    <input type="text" value={value} id={searchFiled} onChange={(e)=>{filterHandler(e.target.value)}}/></div>
}