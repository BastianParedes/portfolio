import React from 'react';
import styles from '../styles/nav.module.css';


export default function Nav() {
    let [openedNav, setOpenedNav] = React.useState(false);

    let MySection = (props) => {
        return (
            <li>
                <a href={props.href} className={styles['nav-button-color']}>
                    <i className={props.icon}></i>
                    <span>{props.textContent}</span>
                </a>
            </li>
        );
    }

    let openNav = () => {
        setOpenedNav(true);
    }

    let closeNav = () => {
        setOpenedNav(false);
    }


    return (
        <nav className={styles['side-bar'] + ' ' + (openedNav ? '' : styles['closed-side-bar'])}>
            <button className={styles['nav-btn-opener'] + ' ' + (openedNav ? styles['nav-btn-opener-when-opened-nav'] : '')} onClick={openNav}><i className='bx bx-menu'></i></button>
            <button className={styles['nav-btn-closer'] + ' ' + styles['nav-button-color']} onClick={closeNav}><i className='bx bx-x'></i></button>
            <ul className={styles['nav-list']}>
                <MySection href='#begin' icon='bx bx-home' textContent='Inicio' />
                <MySection href='#web-projects' icon='bx bx-briefcase' textContent='Proyectos web' />
                <MySection href='#other-projects' icon='bx bx-briefcase' textContent='Otros proyectos' />
                <MySection href='#skills' icon='bx bx-brain' textContent='Skills' />
                <MySection href='#contact' icon='bx bx-mail-send' textContent='Contacto' />
            </ul>
        </nav>
    );
}


