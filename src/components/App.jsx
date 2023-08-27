import { Component } from 'react';
import { Notify } from 'notiflix';
import './App.css';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    document.title = 'HW-2 Phonebook';
  }

  handleAddContact = contact => {
    const { contacts } = this.state;
    const { name } = contact;

    if (contacts.find(contact => contact.name === name)) {
          Notify.failure(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  handleFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.handleAddContact} />
        <h2>Contacts</h2>
        <Filter onFilter={this.handleFilter} filter={this.state.filter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
