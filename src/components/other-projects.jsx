import React from 'react';
import { BsGithub } from 'react-icons/bs';
import SectionTittle  from './section-tittle';
import styles from '../styles/other-projects.module.css';

export default class OtherProjects extends React.Component {

    MyProject(props) {
        return (
            <div className={styles['project-card']}>
                <img className={styles['project-image']} src={props.src} alt={props.name}/>
                <span className={styles['project-name']}>{props.name}</span>
                <div className={styles['links-project-container']}>
                    <a className={styles['link-btn-project']} href={props.githubhref} target='_blank' rel='noreferrer noopener'><BsGithub /></a>
                </div>
            </div>
        );
    }



    render() {
        return (
            <section id='other-projects' className={styles['other-projects']}>
                <SectionTittle>Otros proyectos</SectionTittle>
                <div className={styles['big-section-content']}>
                    <this.MyProject src={require('../images/projects/tstmaker.png')} name='TstMaker' githubhref='https://github.com/BastianParedes/tstmaker'/>
                </div>
            </section>
        );
    }

}
  
