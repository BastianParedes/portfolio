
import React from 'react';
import { FaGlobe } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'

import Section  from '../section';
import styles from './styles.module.css';

import projects from './projects.json';

function Project(props) {
    // const imagePath = process.env.PUBLIC_URL + '/images/projects/' + props.image;
    const imagePath = process.env.PUBLIC_URL + '/images/background/background.jpg';
    return (
        <div className={styles['project-card']}>
            <img className={styles['image']} src={imagePath} alt={props.image}/>
            <h2 className={styles['project-name']}>{props.name}</h2>
            <div className={styles['project-description-container']}>
                <p className={styles['project-description']}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi possimus nemo sapiente aliquid ducimus voluptate culpa laboriosam qui, deserunt, mollitia adipisci, doloremque quia? Qui, velit voluptas excepturi maiores vel necessitatibus!
                </p>
            </div>
        </div>
    );
}

{/* <div className={styles['project-card']}>
    <a href={props.href} target='_blank' rel='noreferrer noopener'><img className={styles['project-image']} src={process.env.PUBLIC_URL + '/images/projects/' + props.src} alt={props.name}/></a>
    <span className={styles['project-name']}>{props.name}</span>
    <div className={styles['links-project-container']}>
        <a className={styles['link-btn-project']} href={props.href} target='_blank' rel='noreferrer noopener'><FaGlobe /></a>
        <a className={styles['link-btn-project']} href={props.githubhref} target='_blank' rel='noreferrer noopener'><BsGithub /></a>
    </div>
</div> */}

export default function Portfolio() {



    return (
        <Section id='portfolio' title='My portfolio'>
            <div className={styles['projects-container']}>
                {projects.projects.map((info, index) => <Project key={index} name={info.name} link={info.link} image={info.image} github={info.github} />)}
                
            </div>
        </Section>
    );
}
  
