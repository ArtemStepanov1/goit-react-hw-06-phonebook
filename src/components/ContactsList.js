import { BsFillXCircleFill } from "react-icons/bs";

export const ContactsList = ({contacts, onDeleteContact}) => {
    return(
        <ul
        style={{
            padding: "16px"
        }}>
            {contacts.map(({id, name, number}) => (
              
                <li key={id}
                style={{
                    marginBottom:"8px",
                    borderBottom: "2px solid lightgray",
                    display: "flex",
                    justifyContent: "space-between",
                    listStyleType: "circle"
                }}
                >

                <label>{`${name}: ${number}`}</label>
                  
                    <button
                    type="button"
                    style={{
                        width:"16px",
                        height:"16px",
                        border: "none",
                        borderRadius: "50%",
                        padding: 0,
                    }}

                    onClick={() => onDeleteContact(id)}
                    >
                        <BsFillXCircleFill
                            style={{
                                fill: "#e11414",
                            }}/>
                    </button>


                </li>
              
            ))}
        </ul>
    )
}
