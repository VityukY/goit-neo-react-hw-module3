// Correctly import the CSS module
import styles from './ContactList.module.css';
import Contact from "../Contact/Contact";

export default function ContactList({ contacts, deleteHandler }) {
    return (
        <ul className={styles.list}>
            {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} deleteHandler={deleteHandler} />
            ))}
        </ul>
    );
}
