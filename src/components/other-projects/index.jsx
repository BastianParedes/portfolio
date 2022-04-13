import { BsGithub } from 'react-icons/bs';
import SectionTittle  from '../section-tittle';
import styles from './styles.module.css';

export default function OtherProjects() {

    let MyProject = (props) => {
        return (
            <div className={styles['project-card']}>
                <img className={styles['project-image']} src={process.env.PUBLIC_URL + props.src} alt={props.name}/>
                <span className={styles['project-name']}>{props.name}</span>
                <div className={styles['links-project-container']}>
                    <a className={styles['link-btn-project']} href={props.githubhref} target='_blank' rel='noreferrer noopener'><BsGithub /></a>
                </div>
            </div>
        );
    }



    return (
        <section id='other-projects' className={styles['other-projects']}>
            <SectionTittle>Otros proyectos</SectionTittle>
            <div className={styles['big-section-content']}>
                <MyProject src={'/images/projects/tstmaker.png'} name='TstMaker' githubhref='https://github.com/BastianParedes/tstmaker'/>
            </div>
        </section>
    );

}
  