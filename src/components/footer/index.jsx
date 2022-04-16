import styles from './styles.module.css';


export default function Footer() {
    return (
        <footer className={styles['footer']}>
            <a className={styles['footer__a']} href="https://github.com/BastianParedes/bastianparedes.github.io" target='_blank' rel='noreferrer noopener'>
                Portfolio designed by @Bastián Paredes, © 2022
            </a>
        </footer>
    );
}
  