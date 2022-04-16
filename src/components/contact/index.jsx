
import styles from './styles.module.css';

import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import { VscGithubAlt, VscMail } from 'react-icons/vsc';

function Link({ link, children }) {
    return (
        <li className={styles['link']}>
            <a className={styles['link__a']} href={link} target='_blank' rel='noreferrer noopener'>{children}</a>
        </li>
    );
}


export default function Contact() {
    return (
        <div className={styles['link-container']}>
            <ul className={styles['links-list']}>
                <Link link='https://github.com/BastianParedes'><VscGithubAlt /></Link>
                <Link link='mailto:bastian.p.trabajo@outlook.com'><VscMail /></Link> 
                <Link link='https://www.linkedin.com/in/bastianparedes/'><AiOutlineLinkedin /></Link>
                <Link link='https://www.instagram.com/bastian.p.95/'><FiInstagram /></Link>
                <div className={styles['vertical-line']}></div>
            </ul>
        </div>
    );
}

