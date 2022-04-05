import React from 'react';
import styles from '../styles/home.module.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';

export default function Home() {

    return (
        <section id='home' className={styles['home']}>
            <div className={styles['cuadro']}>
                <h1>Bastián Paredes</h1>
                <div className={styles['typewriter-container']}>
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: true,
                        pauseFor: 3000,
                        strings: ['Full Stack Developer'],
                    }}
                />
                </div>
            </div>
            <a className={styles['btn-down']} href='#web-projects'>
                <BiDownArrowAlt />
            </a>
        </section>
    );
}



