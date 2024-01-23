import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover}
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1740&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar  src="https://pbs.twimg.com/profile_images/1688298011384840192/5NpJulCi_400x400.jpg" />

                <strong>Rafael Dargoni</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#" className={styles.btn}>
                    <PencilLine className='iconP' size={20}/>
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}