//deStructur kardim + Reusble component Contactitem
// eslint-disable-next-line react/prop-types
function Contactitem({ data: { id, name, lastName, email, phone } }) {
    return (
        <li key={id}>

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

            <button>❌</button>
        </li>
    )
}

export default Contactitem