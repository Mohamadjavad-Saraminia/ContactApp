import Contactitem from "./Contactitem"
import styles from "../Components/Contactlist.module.css"

/* eslint-disable react/prop-types */
function Contactlist({ contacts, deleteHandeler }) {
    return (
        <div className={styles.container}>
            <h3>Contacts list: </h3>
            {/* baraye Inke No Contact neshoon bedim| Yek ternery Operator Neveshtam */}
            {contacts.length ? (
                <ul className={styles.contact}>
                    {contacts.map((contact) => (
                        <Contactitem key={contact.id} data={contact} deleteHandeler={deleteHandeler} />
                    ))}
                </ul>
            ) :
                <p className={styles.message}>No Contacts Yet!</p>}

        </div>

    )
}

export default Contactlist