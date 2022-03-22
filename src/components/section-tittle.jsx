import styles from '../styles/section-tittle.module.css';


export default function SectionTittle(props) {
    return <h3 className={styles['big-section-title']}>{props.children}</h3>
}