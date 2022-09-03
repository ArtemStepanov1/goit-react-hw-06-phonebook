import { MdClose } from "react-icons/md"
import {
    ContactList,
    ContactItem,
    DelContactBtn,
} from "./ContactsList.styled"

export const ContactsList = ({contacts, onDeleteContact}) => {
    return(
        <ContactList>
            {contacts.map(({id, name, number}) => (
              
                <ContactItem key={id}>
                    <label>{`${name}: ${number}`}</label>
                    <DelContactBtn
                        type="button"
                        onClick={() => onDeleteContact(id)}
                        >
                            <MdClose
                                className="delContactBtnIcon"                            
                            />
                    </DelContactBtn>
                </ContactItem>
            ))}
        </ContactList>     
    )
}