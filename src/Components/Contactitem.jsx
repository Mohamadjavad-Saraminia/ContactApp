import styles from "../Components/Contactitem.module.css"

//deStructur kardim + Reusble component Contactitem
// eslint-disable-next-line react/prop-types
function Contactitem({ data: { id, name, lastName, email, phone }, deleteHandeler }) {
    return (
        <li key={id} className={styles.item}>

            <p>
                {name}
                {lastName}
            </p>

            <p>
                {/* win+;=emoji */}
                <span>📭</span>
                {email}
            </p>

            <p>
                <span>📞</span>
                {phone}
            </p>

            <button onClick={() => deleteHandeler(id)}>❌</button>
        </li>
    )
}

export default Contactitem