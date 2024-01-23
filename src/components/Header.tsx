import styles from'./Header.module.css'

import igniteLogo from '../assets/react.svg';


export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt= "logotipo" 
            />
            <strong>
                <h1>Uni</h1> 
                Connect
            </strong>
        </header>
    )
} 