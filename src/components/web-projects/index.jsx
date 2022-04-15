import React from 'react';
import { FaGlobe } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

import SectionTittle  from '../section-tittle';
import styles from './styles.module.css';

export default function WebProjects() {

    let MyProject = (props) => {
        return (
            <div className={styles['project-card']}>
                <a href={props.href} target='_blank' rel='noreferrer noopener'><img className={styles['project-image']} src={process.env.PUBLIC_URL + '/images/projects/' + props.src} alt={props.name}/></a>
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
            <SectionTittle title='Proyectos web' />
            <div className={styles['big-section-content']}>
                <MyProject href='?' src='portfolio.png' name='Portafolio' githubhref='https://github.com/BastianParedes/bastianparedes.github.io'/>
                <MyProject href='https://bastianparedes.com/pdf-constructor/' src='pdf-constructor.png' name='PDF constructor' githubhref='https://github.com/BastianParedes/pdf-constructor'/>
                <MyProject href='https://bastianparedes.com/my-global-chat/' src='my-global-chat.jpg' name='My global chat' githubhref='https://github.com/BastianParedes/my-global-chat'/>
                <MyProject href='https://tu-salad.herokuapp.com/' src='tu-salad.png' name='Tu Salad' githubhref='https://github.com/BastianParedes/tu-salad'/>
            </div>
        </section>
    );
}
  
