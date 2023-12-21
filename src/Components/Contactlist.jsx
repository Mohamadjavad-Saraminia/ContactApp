/* eslint-disable react/prop-types */
function Contactlist({ contacts }) {
    console.log(contacts)
    return (
        <div>
            <h3>Contactlist</h3>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>{contact.name}</li>
                ))}
            </ul>
        </div>

    )
}

export default Contactlist