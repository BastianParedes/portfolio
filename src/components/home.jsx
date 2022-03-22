import React from 'react';
import styles from '../styles/home.module.css';

export default class Home extends React.Component {

    state = {
        action: 'write',
        word: 'Front End Developer',
        showedSentence: '',
    }

    typeLetter = () => {
        if (this.state.action ==='write') {
            this.setState({showedSentence: this.state.showedSentence + this.state.word[this.state.showedSentence.length]});

            if (this.state.showedSentence === this.state.word) { //detecta que la oración está completa, por lo que cambia la acción y programa el comienzo del borrado
                this.setState({action:'wait'});

                setTimeout(() => { // en tres segundos cambia la acción a borrado
                    this.setState({action:'erase'});
                }, 3000);
            }

        } else if (this.state.action === 'erase') {
            this.setState({showedSentence: this.state.showedSentence.slice(0,-1)})
            if (this.state.showedSentence.length === 0) {
                this.setState({action:'write'});
            }

        } else if (this.state.action === 'wait') {};
    }

    componentDidMount() {
        this.myInterval = setInterval(this.typeLetter, 100);
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
        this.setState({
            action: 'write',
            word: 'Front End Developer',
            showedSentence: ''
        })
    }


    render() {
        return (
            <section id='home' className={styles['home']}>
                <div className={styles['cuadro']}>
                    <h1>Bastián Paredes</h1>
                    <div className={styles['typewriter-container'] + ' ' + (this.state.action === 'wait' ? styles['cursor-animation-on'] : '')}>
                        <h2>{this.state.showedSentence}</h2>
                    </div>
                </div>
                <a className={styles['btn-down']} href='#web-projects'>
                    <i className='bx bx-down-arrow-alt'></i>
                </a>
            </section>
        );
    }
}



