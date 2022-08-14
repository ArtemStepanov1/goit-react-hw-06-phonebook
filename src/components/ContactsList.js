
export const ContactsList = ({contacts}) => {
    return(
        <ul>
            {contacts.map(({id, name, number}) => (
              
                <li key={id}
                style={{
                    marginBottom:"8px",
                }}
                >
                  <label>{`${name}: ${number}`}</label>
                </li>
              
            ))}
        </ul>
    )
}
