import React from "react";
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends React.Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
        const {name, value} = event.currentTarget;
        
        this.setState({ [name]: value})
      };
    
      handleSubmit = event => {
        event.preventDefault();
        
        const contact = {id: uuidv4(), name: this.state.name, number: this.state.number};
        this.props.onSubmit(contact);

        this.resetForm();
      };
    
      resetForm = () => {
        this.setState({name: "", number: ""})
      };

      render() {
          return (
            <form onSubmit={this.handleSubmit}>
            <label>Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
                value={this.state.name}
              />
            </label>
            <label>Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={this.handleChange}
                value={this.state.number}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
          )
      }
}

export default ContactForm;