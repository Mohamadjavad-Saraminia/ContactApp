import { useState } from 'react'
import styles from '../Components/Contact.module.css'
import Contactlist from './Contactlist';
import inputs from '../Constance/Inputs';
function Contact() {

    const [contacts, setContacts] = useState([]);
    const [alert, setAlert] = useState("");
    const [contact, setContact] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
    });
    //voroodihaye inputha
    const changHandeler = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setContact((contact) => ({ ...contact, [name]: value }))
    };

    const addHandeler = () => {
        if (!contact.name || !contact.lastname || !contact.email || !contact.phone) {
            setAlert("Please enter valid data");
            return;
        }
        setAlert("");
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
                <div>{alert && <p>{alert}</p>}</div>
            </div>
            <Contactlist contacts={contacts} />
        </div>

    )
}

export default Contact