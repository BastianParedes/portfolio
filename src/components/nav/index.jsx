
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import styles from './styles.module.css';





export default function Nav() {
    let [opened, setOpened] = React.useState(false);
    const logoPath = process.env.PUBLIC_URL + '/images/logo.png';


    
    let Link = (props) => {
        return (
            <li className={styles['link']}>
                <a href={props.link} className={styles['link__a']} onClick={() => setOpened(false)}>
                    <span className={styles['section-name']}>{props.title}</span>
                </a>
            </li>
        );
    }




    return (
        <nav className={styles['nav']}>
            <div className={styles['logo-container']}>
                <img className={styles['logo']} src={logoPath} alt="Bastián Paredes" />
            </div>
            <div className={styles['button-container']}>
                <button className={styles['button']} onClick={() => setOpened(!opened)}><AiOutlineMenu /></button>
            </div>
            <ul className={`${styles['links-container']} ${opened ? styles['links-container-opened'] : ''}`}>
                <Link link='#home' title='Home' />
                <Link link='#about' title='About' />
                <Link link='#portfolio' title='Porftolio' />
            </ul>
        </nav>
    );
}


