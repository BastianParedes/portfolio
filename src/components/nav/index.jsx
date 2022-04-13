import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { BiBrain, BiMailSend } from 'react-icons/bi';
import { BsBriefcase, BsGlobe2 } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import styles from './styles.module.css';


export default function Nav() {
    let [openedNav, setOpenedNav] = React.useState(false);

    let MySection = (props) => {
        return (
            <li className={styles['link-container']}>
                <a href={props.href} className={styles['link'] + ' ' + styles['nav-button-color']}>
                    <span className={styles['icon']}>{props.children}</span>
                    <span className={styles['section-name']}>{props.textContent}</span>
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
            <button className={styles['nav-btn-opener'] + ' ' + (openedNav ? styles['nav-btn-opener-when-opened-nav'] : '')} onClick={openNav}><GiHamburgerMenu /></button>
            <button className={styles['nav-btn-closer'] + ' ' + styles['nav-button-color']} onClick={closeNav}><IoMdClose /></button>
            <ul className={styles['nav-list']}>
                <MySection href='#home' textContent='Inicio'>
                    <AiOutlineHome />
                </MySection>
                <MySection href='#web-projects' textContent='Proyectos web'>
                    <BsGlobe2 />
                </MySection>
                <MySection href='#other-projects' textContent='Otros proyectos'>
                    <BsBriefcase />
                </MySection>
                <MySection href='#skills' textContent='Skills'>
                    <BiBrain />
                </MySection>
                <MySection href='#contact'textContent='Contacto'>
                    <BiMailSend />
                </MySection>
            </ul>
        </nav>
    );
}


