import { useState, useEffect } from "react";
import { Box } from 'theme-ui';
import { GlobalStyle } from './GlobalStyle';
import { ContactsForm } from "./Form/Form";
import { nanoid } from "nanoid";
import { Filter } from './Filter';
import { ContactsList } from "./ContactsList/ContactsList";

export const App = () => {
  const [contacts, setContacts] = useState(
    localStorage.getItem('contacts')
            ? JSON.parse(localStorage.getItem('contacts'))
            : []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const addContact = (name, number) => {
    const availabilityCheck = contacts.find( contact => contact.name === name);

    if(availabilityCheck) {
      return alert(`${name} is already in contacts`)
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([contact, ...contacts]);
  }

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevСontacts => (prevСontacts.filter(contact => contact.id !== contactId)))
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <>
      <Box 
      style={{
        width: "25vw",
        padding: "16px",
      }}>
        
        <h2>Phonebook</h2>
        
        <ContactsForm onSubmit={addContact}/>
        
        <h3
        style={{
          marginBottom: "16px"
        }}
        >Contacts</h3>

        <Filter 
          value={filter}
          onChange={changeFilter}
        />

        <ContactsList 
          contacts={filteredContacts}
          onDeleteContact={deleteContact}
        />

      </Box>
      <GlobalStyle />
    </>
  ) 
}