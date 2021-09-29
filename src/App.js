// import './App.css';
import React from "react";
import Container from "./components/Container";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";

class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],    
  };

  formSubmitHandler = data => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, data]}
    });
  };

  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler}>
          </ContactForm>
        </Section>
        <Section title="Contacts">
          <ul>
            {this.state.contacts.map( contact => {
              return (
                <li key={contact.id}>{contact.name}: {contact.number}</li>
              )
            })}
          </ul>
        </Section>
      </Container>
    );
  }
};

export default App;
