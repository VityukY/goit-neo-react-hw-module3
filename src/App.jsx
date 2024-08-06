import 'modern-normalize'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import initialContacts from './initialContacts.json'
import { useState } from 'react'
import './App.css'

function App() {
  const [contacts, contactHandler] = useState(initialContacts)
  function contactAdd (newContact) {()=> {
    contactHandler ((pervContacts) => {
      return [...pervContacts, newContact]
    })
  }}
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm contactAdd={contactAdd}/>
      <SearchBox />
      <ContactList contacts={contacts}/>
    </>
  )
}

export default App
