
import styles from './styles.module.css';
import { Section } from '../common';


function Skill (props) {
    return (
        <div className={styles['skill-card']}>
            <img className={styles['skill-image']} src={process.env.PUBLIC_URL + '/images/skills/' + props.src} alt={props.name}/>
            <p className={styles['skill-name']}>{props.name}</p>
        </div>
    );
}


export default function About() {
    return (
        <Section id='about' title='About me'>
            <div className={styles['main']}>
                <div className={styles['main-left']}>
                    <h2 className={styles['main-left__h2']}>Soy Bastián Paredes,</h2>
                    <p className={styles['main-left__p']}>
                        Un Full Stack Developer con experiencia construyendo sitios web con responsive design que conecten front-end y back-end. Me especializo en el uso de JavaScript, React.js y Next.js.
                    </p>
                    <p className={styles['main-left__p']}>
                        Siempre busco mejorar mis habilidades desarrollando proyectos propios a la par de mi trabajo. Estoy constantemente estudiando acerca de las nuevas tecnologías para actualizar mi repertorio de herramientas para que los códigos de mis creaciones sean fáciles de leer, seguros y eficientes.
                    </p>
                    <button className={styles['button-cv']}>
                        <a className={styles['button-cv__a']} href="https://drive.google.com/file/d/1UiXDymZfivsmlM_T8uz2I6pgcEMxLJ60/view?usp=sharing" target='_blank' rel='noreferrer noopener'>Ver currículum</a>
                    </button>
                </div>
                <div className={styles['main-right']}>
                    <h2 className={styles['main-right__h2']}>Skills</h2>
                    <div className={styles['skills-container']}>
                        <Skill src='html5.png' name='HTML 5' />
                        <Skill src='css3.png' name='CSS 3' />
                        <Skill src='javascript.png' name='JavaScript' />
                        <Skill src='typescript.png' name='TypeScript' />
                        <Skill src='react.js.png' name='React.js' />
                        <Skill src='next.js.png' name='Next.js' />
                        <Skill src='mysql.png' name='MySql' />
                        <Skill src='python3.png' name='Python 3' />
                    </div>
                </div>
            </div>
        </Section>
    );
}
  