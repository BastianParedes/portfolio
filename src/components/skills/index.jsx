import SectionTittle  from '../section-tittle';
import styles from './styles.module.css';

export default function Skills() {

    let Skill = (props) => {
        return (
            <div className={styles['skill-card']}>
                <img className={styles['skill-image']} src={process.env.PUBLIC_URL + props.src} alt={props.name}/>
                <p className={styles['skill-name']}>{props.name}</p>
            </div>
        );
    }

    return (
        <section id='skills' className={styles['skills']}>
            <SectionTittle>Skills</SectionTittle>
            <div className={styles['big-section-content']}>
                <Skill src={'/images/skills/html5.png'} name='HTML 5' />
                <Skill src={'/images/skills/css3.png'} name='CSS 3' />
                <Skill src={'/images/skills/javascript.png'} name='JavaScript' />
                <Skill src={'/images/skills/typescript.png'} name='TypeScript' />
                <Skill src={'/images/skills/react.js.png'} name='React.js' />
                <Skill src={'/images/skills/next.js.png'} name='Next.js' />
                <Skill src={'/images/skills/nodejs.png'} name='Node.js' />
                <Skill src={'/images/skills/python3.png'} name='Python 3' />
                <Skill src={'/images/skills/git.png'} name='Git' />
                <Skill src={'/images/skills/mysql.png'} name='MySql' />
            </div>
        </section>
    );
}

  
