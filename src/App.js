import 'normalize.css';

import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';


export default function App() {
    return <>
        {/* <Nav /> */}
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer  />
    </>;
}


