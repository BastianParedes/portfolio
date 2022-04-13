import React from 'react';
import ParticlesOptions from './particles.json';
import Particles from "react-tsparticles";

import styles from './styles.module.css';
import { BiDownArrowAlt } from 'react-icons/bi';
import Typewriter from 'typewriter-effect';

export default function Home() {

    return (
        <section id='home' className={styles['home']}>
            <Particles className={styles['particles']} options={ParticlesOptions} />
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



