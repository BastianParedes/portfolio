import 'normalize.css';

import Nav from './components/nav';
import Home from './components/home';
import About from './components/about';
import WebProjects from './components/web-projects';
import OtherProjects from './components/other-projects';
import Contact from './components/contact';
import Footer from './components/footer';


export default function App() {
    return <>
        {/* <Nav /> */}
        <Home />
        <About />
        <WebProjects />
        <OtherProjects />
        <Contact />
        <Footer  />
    </>;
}


