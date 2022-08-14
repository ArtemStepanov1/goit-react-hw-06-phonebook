import { Component } from "react";
import { Box } from 'theme-ui'
import { GlobalStyle } from './GlobalStyle'
import { Form } from './Form'
import { nanoid } from "nanoid";
import { Filter } from './Filter';
import { ContactsList } from "./ContactsList";

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
  }    

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }))
  }

  changeFilter = e => {
    this.setState({filter: e.currentTarget.value});
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
          />

        </Box>
        <GlobalStyle />
      </>
    )
  }
    
};
