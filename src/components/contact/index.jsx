import SectionTittle  from '../section-tittle';
import styles from './styles.module.css';

export default function Contact() {

    let SocialNetwork = (props) => {
        return (
            <a className={styles['contact-btn'] + ' ' + props.className} target='_blank'  href={props.href} rel='noreferrer noopener'>
                <img className={styles['contact-image']} src={process.env.PUBLIC_URL + '/images/contact/' + props.src} alt={props.alt}/>
                <span className={styles['contact-name']}>{props.textContent}</span>
            </a>  
        );
    }

    return (
        <section id='contact' className={styles['contact']}>
            <SectionTittle>Contacto</SectionTittle>
            <div className={styles['big-section-content']}>
                <SocialNetwork className={styles['contact-btn-github']} href='https://github.com/BastianParedes' src='github.png' alt='Ir a GitHub' textContent='GitHub' />
                <SocialNetwork className={styles['contact-btn-email']} href='mailto:bastian.p.trabajo@outlook.co' src='email.png' alt='Enviar correo' textContent='Email Me' />
                <SocialNetwork className={styles['contact-btn-linkedin']} href='https://www.linkedin.com/in/bastianparedes/' src='linkedin.png' alt='Ir a LinkedIn' textContent='LinkedIn' />
            </div>
        </section>
    );
}

