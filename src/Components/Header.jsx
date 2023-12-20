import styles from "./Header.module.css"
function Header() {
    return (
        <div className={styles.container}>
            <h1>Contact App</h1>
            <p><a href="https://www.w3schools.com/react/">W3school</a> | To Learn React js</p>
        </div>
    )
}

export default Header