
import React from 'react';
import { VscSignOut, VscGithub } from 'react-icons/vsc'

import { Section } from '../common';
import styles from './styles.module.css';
import stylesRight from './stylesRight.module.css';
import stylesLeft from './stylesLeft.module.css';

import projects from './projects.json';

function Project( { index, name, link, image, github, description, technologies }) {

    const stylesSide = index % 2 === 0 ? stylesRight : stylesLeft;

    const imagePath = process.env.PUBLIC_URL + '/images/projects/' + image;
    return (
        <div className={styles['project-card']}>
            {
                link !== '' ?
                <a className={`${styles['image']} ${stylesSide['image-container']}`} href={link} target='_blank' rel='noreferrer noopener'>
                    <img className={`${styles['image']} ${stylesSide['image']}`} src={imagePath} alt={image} />
                </a>
                :
                <img className={`${styles['image']} ${stylesSide['image']}`} src={imagePath} alt={image} />
            }
            
            <h2 className={`${styles['project-name']} ${stylesSide['project-name']}`}>{name}</h2>
            <div className={`${styles['project-description-container']} ${stylesSide['project-description-container']}`}>
                <p className={`${styles['project-description']} ${stylesSide['project-description']}`}>{description}</p>
            </div>
            <span className={`${styles['project-technologies']} ${stylesSide['project-technologies']}`}>{technologies.join(' ')}</span>
            {link !== '' ? <a className={`${styles['link-website']} ${stylesSide['link-website']}`} href={link} target='_blank' rel='noreferrer noopener'><VscSignOut /></a> : ''}
            <a className={`${styles['link-github']} ${stylesSide['link-github']}`} href={github} target='_blank' rel='noreferrer noopener'><VscGithub /></a>
        </div>
    );
}



export default function Portfolio() {
    return (
        <Section id='portfolio' title='Portfolio'>
            <div className={styles['projects-container']}>
                {projects.projects.map((info, index) => <Project key={index} index={index} projectInfo={info}name={info.name} link={info.link} image={info.image} github={info.github} description={info.description} technologies={info.technologies} />)}
            </div>
        </Section>
    );
}
  
