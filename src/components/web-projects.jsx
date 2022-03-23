import React from 'react';
import { FaGlobe } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

import SectionTittle  from './section-tittle';
import styles from '../styles/web-projects.module.css';

export default function WebProjects() {

    let MyProject = (props) => {
        return (
            <div className={styles['project-card']}>
                <a href={props.href} target='_blank' rel='noreferrer noopener'><img className={styles['project-image']} src={props.src} alt={props.name}/></a>
                <span className={styles['project-name']}>{props.name}</span>
                <div className={styles['links-project-container']}>
                    <a className={styles['link-btn-project']} href={props.href} target='_blank' rel='noreferrer noopener'><FaGlobe /></a>
                    <a className={styles['link-btn-project']} href={props.githubhref} target='_blank' rel='noreferrer noopener'><BsGithub /></a>
                </div>
            </div>
        );
    }

    return (
        <section id='web-projects' className={styles['web-projects']}>
            <SectionTittle>Proyectos web</SectionTittle>
            <div className={styles['big-section-content']}>
                <MyProject href='?' src={require('../images/projects/portfolio.png')} name='Portafolio' githubhref='https://github.com/BastianParedes/portfolio'/>
                <MyProject href='https://bastianparedes.com/pdf-constructor/' src={require('../images/projects/pdf-constructor.png')} name='PDF constructor' githubhref='https://github.com/BastianParedes/pdf-constructor'/>
                <MyProject href='https://bastianparedes.com/my-global-chat/' src={require('../images/projects/my-global-chat.jpg')} name='My global chat' githubhref='https://github.com/BastianParedes/my-global-chat'/>
                <MyProject href='https://bastianparedes.com/tu-salad/' src={require('../images/projects/tu-salad.png')} name='Tu Salad' githubhref='https://github.com/BastianParedes/tu-salad'/>
            </div>
        </section>
    );
}
  
