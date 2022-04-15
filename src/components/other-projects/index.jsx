import { BsGithub } from 'react-icons/bs';
import Section  from '../section';
import styles from './styles.module.css';

export default function OtherProjects() {

    let MyProject = (props) => {
        return (
            <div className={styles['project-card']}>
                <img className={styles['project-image']} src={process.env.PUBLIC_URL + '/images/projects/' + props.src} alt={props.name}/>
                <span className={styles['project-name']}>{props.name}</span>
                <div className={styles['links-project-container']}>
                    <a className={styles['link-btn-project']} href={props.githubhref} target='_blank' rel='noreferrer noopener'><BsGithub /></a>
                </div>
            </div>
        );
    }



    return (
        <Section id='other-projects' className={styles['other-projects']} title='Otros proyectos'>
            <div className={styles['big-section-content']}>
                <MyProject src='tstmaker.png' name='TstMaker' githubhref='https://github.com/BastianParedes/tstmaker'/>
            </div>
        </Section>
    );

}
  
