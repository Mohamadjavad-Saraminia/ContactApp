import Contactitem from "./Contactitem"

/* eslint-disable react/prop-types */
function Contactlist({ contacts }) {
    return (
        <div>
            <h3>Contactlist</h3>
            {/* baraye Inke No Contact neshoon bedim| Yek ternery Operator Neveshtam */}
            {contacts.length ? (
                <ul>
                    {contacts.map((contact) => (
                        <Contactitem key={contact.id} data={contact} />
                    ))}
                </ul>
            ) :
                <p>No Contacts Yet!</p>}

        </div>

    )
}

export default Contactlist