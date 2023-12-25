import { useState } from 'react'
import Contactlist from './Contactlist';
import inputs from '../Constance/Inputs';
import { v4 } from 'uuid';

import styles from '../Components/Contacts.module.css'
function Contacts() {

    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        id: "",
        name: "",
        lastname: "",
        email: "",
        phone: "",
    });

    const deleteHandeler = (id) => {
        const newContacts = contacts.filter(contact => contact.id !== id);
        setContacts(newContacts);
    }
    //voroodihaye inputha
    const changHandeler = (event) => {

        const name = event.target.name;
        const value = event.target.value;

        setContact((contact) => ({ ...contact, [name]: value }))
    };

    const addHandeler = () => {
        if (!contact.name || !contact.lastname || !contact.email || !contact.phone) {
            setAlert("Please enter valid data!");
            return;
        }
        setAlert("");
        //baraye sakhte Uniqe cod ba Package UUID
        const newContact = { ...contact, id: v4() };
        setContacts((contacts) => [...contacts, newContact]);
        setContact({
            name: "",
            lastname: "",
            email: "",
            phone: "",
        });
    }
    return (
        <div className={styles.contauner}>
            <div className={styles.form}>
                {/* map mizanam ta inputha ke Moshakhas kardam too jsT sakhte beshan */}
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        type={input.type}
                        placeholder={input.placeholder}
                        name={input.name}
                        value={contact[input.name]}
                        onChange={changHandeler}
                    />))}

                <button onClick={addHandeler} > Add contact</button>
                <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
                <Contactlist contacts={contacts} deleteHandeler={deleteHandeler} />
            </div>

        </div>

    )
}

export default Contacts