import 'normalize.css';

import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';


export default function App() {
    return <>
        <Home />
        <div style={{position: 'relative', backgroundColor: 'rgb(0, 85, 124)'}}>
            <Nav />
            <About />
            <Portfolio />
            <Contact />
        </div>
        <Footer  />
    </>;
}


