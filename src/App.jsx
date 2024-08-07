import 'modern-normalize'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import initialContacts from './initialContacts.json'
import { useState } from 'react'
import './App.css'

function App() {
  const [contacts, contactHandler] = useState(initialContacts)
  const [filter, setFilter] = useState('');
  const contactAdd = (newContact) => {
    contactHandler ((pervContacts) => {
      return [...pervContacts, newContact]
  })
  }

  const deleteContact = (contactId) => {
    contactHandler((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm contactAdd={contactAdd}/>
      <SearchBox value={filter} filterHandler={setFilter} />
      <ContactList contacts={visibleContacts} deleteHandler={deleteContact}/>
    </>
  )
}

export default App
