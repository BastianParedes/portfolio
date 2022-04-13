import SectionTittle  from '../section-tittle';
import styles from './styles.module.css';

export default function Skills() {

    let Skill = (props) => {
        return (
            <div className={styles['skill-card']}>
                <img className={styles['skill-image']} src={process.env.PUBLIC_URL + '/images/skills/' + props.src} alt={props.name}/>
                <p className={styles['skill-name']}>{props.name}</p>
            </div>
        );
    }

    return (
        <section id='skills' className={styles['skills']}>
            <SectionTittle>Skills</SectionTittle>
            <div className={styles['big-section-content']}>
                <Skill src='html5.png' name='HTML 5' />
                <Skill src='css3.png' name='CSS 3' />
                <Skill src='javascript.png' name='JavaScript' />
                <Skill src='typescript.png' name='TypeScript' />
                <Skill src='react.js.png' name='React.js' />
                <Skill src='next.js.png' name='Next.js' />
                <Skill src='nodejs.png' name='Node.js' />
                <Skill src='python3.png' name='Python 3' />
                <Skill src='git.png' name='Git' />
                <Skill src='mysql.png' name='MySql' />
            </div>
        </section>
    );
}

  
