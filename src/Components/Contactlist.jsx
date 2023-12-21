/* eslint-disable react/prop-types */
function Contactlist({ contacts }) {
    return (
        <div>
            <h3>Contactlist</h3>
            {/* baraye Inke No Contact neshoon bedim| Yek ternery Operator Neveshtam */}
            {contacts.length ? (
                <ul>
                    {contacts.map((contact) => (
                        <li key={contact.id}>

                            <p>
                                {contact.name}
                                {contact.lastName}
                            </p>

                            <p>
                                {/* win+;=emoji */}
                                <span>📭</span>
                                {contact.mail}
                            </p>

                            <p>
                                <span>📞</span>
                                {contact.phone}
                            </p>

                            <button>❌</button>
                        </li>
                    ))}
                </ul>
            ) :
                <p>No Contacts Yet!</p>}

        </div>

    )
}

export default Contactlist