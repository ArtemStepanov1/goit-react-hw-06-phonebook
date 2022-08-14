import { Component } from "react";

export class Form extends Component {
    state = {    
        name: '',
        number: '',
    }

    handleChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({ [name]: value })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.reset();
    };

    reset = () => {
        this.setState({ name: '', number: '',})
    };

    render() {


        return (
            <form
            style={{
                // width: "20vw",
                display: "flex",
                flexDirection: "column",
                border: "1px solid gray",
                padding: "16px",
                borderRadius: "4px",
                marginTop: "16px",
                marginBottom: "32px",
            }}

            onChange={this.handleChange}
            onSubmit={this.handleSubmit}

            > 

                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    onChange={this.handleChange}

                    style={{
                        marginBottom: "8px"
                    }}
                />
                <p>Phone number</p>
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    onChange={this.handleChange}
                />
                <button
                type="submit"
                style={{
                    width: "10vw",
                    marginTop: "32px",
                }}
                >Add contact</button>
            </form>
        )
    }
}

