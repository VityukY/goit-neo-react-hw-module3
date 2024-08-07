import styles from './Contact.module.css'

export default function Contact ({contact, deleteHandler}) {

    return <li className={styles.listItem} ><p>{contact.name}</p>
    <p>{contact.number}</p>
    <button onClick={()=>{deleteHandler(contact.id)}}> Delete</button>
    </li>
}   