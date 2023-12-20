import { useState } from 'react'
import styles from '../Components/Contact.module.css'
import Contactlist from './Contactlist';
function Contact() {

    const [contacts, setContacts] = useState([]);
    const [contact, setContact] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
    });

    const changHandeler = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({ ...contact, [name]: value }))
    };
    const addHandeler = () => {
        setContacts((contacts) => [...contacts, contact]);
        setContact({
            name: "",
            lastname: "",
            email: "",
            phone: "",
        });
    }
    return (
        <div>
            <div className={styles.container}>
                <input type="text"
                    placeholder='Name'
                    name='name'
                    value={contact.name}
                    onChange={changHandeler} />

                <input type="text"
                    placeholder='Last Name'
                    name='lastname'
                    value={contact.lastname}
                    onChange={changHandeler} />

                <input type="email"
                    placeholder='Email'
                    name='email'
                    value={contact.email}
                    onChange={changHandeler} />

                <input type="number"
                    placeholder='Phone'
                    name='phone'
                    value={contact.phone}
                    onChange={changHandeler} />

                <button onClick={addHandeler} > Add contact</button>
                <Contactlist contacts={contacts} />
            </div>
        </div>

    )
}

export default Contact