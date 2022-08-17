import { Component } from "react";
import { Box } from 'theme-ui'
import { GlobalStyle } from './GlobalStyle'
import { Form } from './Form'
import { nanoid } from "nanoid";
import { Filter } from './Filter';
import { ContactsList } from "./ContactsList";

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }    

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }

    if(this.state.contacts.find( contact => contact.name === name)) {
      return alert(`${name} is already in contacts`)
    }

    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }))
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevState) {
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const {filter, contacts} = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    )

    return (
      <>
        <Box 
        style={{
          width: "25vw",
          padding: "16px",
        }}>
          
          <h2>Phonebook</h2>
          
          <Form onSubmit={this.addContact}/>
          
          <h3
          style={{
            marginBottom: "16px"
          }}
          >Contacts</h3>

          <Filter 
            value={filter}
            onChange={this.changeFilter}
          />

          <ContactsList 
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact}
          />

        </Box>
        <GlobalStyle />
      </>
    )
  }
    
};
