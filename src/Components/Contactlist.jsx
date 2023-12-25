import Contactitem from "./Contactitem"

/* eslint-disable react/prop-types */
function Contactlist({ contacts, deleteHandeler }) {
    return (
        <div>
            <h3>Contacts list: </h3>
            {/* baraye Inke No Contact neshoon bedim| Yek ternery Operator Neveshtam */}
            {contacts.length ? (
                <ul>
                    {contacts.map((contact) => (
                        <Contactitem key={contact.id} data={contact} deleteHandeler={deleteHandeler} />
                    ))}
                </ul>
            ) :
                <p>No Contacts Yet!</p>}

        </div>

    )
}

export default Contactlist