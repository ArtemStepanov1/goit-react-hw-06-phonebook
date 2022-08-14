
export const ContactsList = ({contacts}) => {
    return(
        <ul>
            {contacts.map(({id, name, number}) => (
              
                <li key={id}>
                  <label>{`${name}: ${number}`}</label>
                </li>
              
            ))}
        </ul>

    )
}
