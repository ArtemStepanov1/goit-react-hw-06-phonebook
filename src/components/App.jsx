import { Component } from "react";
import { Box } from 'theme-ui';
import { GlobalStyle } from './GlobalStyle';
import { ContactsForm } from "./Form/Form";
import { nanoid } from "nanoid";
import { Filter } from './Filter';
import { ContactsList } from "./ContactsList/ContactsList";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }    

  addContact = ({name, number}) => {
    const contacts = this.state.contacts;

    const availabilityCheck = contacts.find( contact => contact.name === name);

    if(availabilityCheck) {
      return alert(`${name} is already in contacts`)
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

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
    const storageContacts = localStorage.getItem('contacts');
    if (storageContacts) {
      this.setState({ contacts: JSON.parse(storageContacts) });
    }
  }

  componentDidUpdate(prevState) {
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    const {filter, contacts} = this.state;

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
          
          <ContactsForm onSubmit={this.addContact}/>
          
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
