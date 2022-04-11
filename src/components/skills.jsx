import SectionTittle  from './section-tittle';
import styles from '../styles/skills.module.css';

export default function Skills() {

    let Skill = (props) => {
        return (
            <div className={styles['skill-card']}>
                <img className={styles['skill-image']} src={props.src} alt={props.name}/>
                <p className={styles['skill-name']}>{props.name}</p>
            </div>
        );
    }

    return (
        <section id='skills' className={styles['skills']}>
            <SectionTittle>Skills</SectionTittle>
            <div className={styles['big-section-content']}>
                <Skill src={require('../images/skills/html5.png')} name='HTML 5' />
                <Skill src={require('../images/skills/css3.png')} name='CSS 3' />
                <Skill src={require('../images/skills/javascript.png')} name='JavaScript' />
                <Skill src={require('../images/skills/typescript.png')} name='TypeScript' />
                <Skill src={require('../images/skills/react.js.png')} name='React.js' />
                <Skill src={require('../images/skills/next.js.png')} name='Next.js' />
                <Skill src={require('../images/skills/nodejs.png')} name='Node.js' />
                <Skill src={require('../images/skills/python3.png')} name='Python 3' />
                <Skill src={require('../images/skills/git.png')} name='Git' />
                <Skill src={require('../images/skills/mysql.png')} name='MySql' />
            </div>
        </section>
    );
}

  
