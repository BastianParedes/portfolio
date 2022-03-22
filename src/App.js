import 'normalize.css';
import './styles/general.css';

import Nav from './components/nav.jsx';
import Home from './components/home';
import WebProjects from './components/web-projects.jsx';
import OtherProjects from './components/other-projects.jsx';
import Skills from './components/skills.jsx';
import Contact from './components/contact';
import Footer from './components/footer.jsx';


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


