import 'normalize.css';

import Nav from './components/nav';
import Home from './components/home';
import WebProjects from './components/web-projects';
import OtherProjects from './components/other-projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Footer from './components/footer';


export default function App() {
    return <>
        <Nav />
        <Home />
        <WebProjects />
        <OtherProjects />
        <Skills />
        <Contact />
        <Footer  />
    </>;
}


