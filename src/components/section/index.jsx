import styles from './styles.module.css';


export default function Section(props) {
    return (
        <section id={props.id} className={`${styles.section} ${props.classname}`}>
            <h3 className={styles['title']}>{props.title}</h3>
            {props.children}
        </section>
    );
}