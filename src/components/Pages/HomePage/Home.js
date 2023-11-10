import './Home.css';
import '../../Project-Card/Project-Card';
import '../../Education-Card/Education'
import { useEffect, useRef, useState } from 'react';
import ProjectCard from '../../Project-Card/Project-Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EducationCard from '../../Education-Card/Education';
import ContactBar from '../../Contact-Bar/Contact';
import Timeline from '../../Timeline/timeline';

function Home() {
  const aboutMeSectionRef = useRef();

  const repoEndpoints = [
    "vineet192/vineet192.github.io",
    "vineet192/Restaurant-Emenu",
    "vineet192/sorting-visualiser",
    "vineet192/ExamHelper",
    "vineet192/bert-qa-server",
    "vineet192/restaurant-emenu-backend"]

  const [projects, setProjects] = useState([])

  function initProjects() {
    Promise.all(repoEndpoints.map(endpoint => fetch(`https://api.github.com/repos/${endpoint}`)))
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(repos => {
        repos.forEach(repo => {
          setProjects(prev => [...prev,
          <ProjectCard
            projectTitle={repo.name}
            projectDesc={repo.description ? repo.description : ""}
            projectUrl={repo.html_url}
            key={repo.name}
          />])
        })
      })
      .catch(err => {

      })
  }

  useEffect(() => {
    if (projects.length !== 0) {
      return
    }
    initProjects()
  }, [])

  return (
    <div className="home">
      {/* Greet Section */}
      <section className="greet-section">
        <div className="glass">
          <h1>Hi I'm Vineet,</h1>
          <h4>I make computers do stuff</h4>
          <button
            onClick={() => {
              console.log(aboutMeSectionRef)
              aboutMeSectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              }, false);
            }}>
            <p>Know me better</p>
            <ExpandMoreIcon />
          </button>
        </div>
      </section>

      <div className="parallax"></div>

      {/* About me section */}
      <section className='about-me-section' ref={aboutMeSectionRef}>
        <h1>About me</h1>
        <p>Hey there! my name is Vineet Kalghatgi and I'm a software developer. Over the course of 2 Computer Science degrees, 2 software development internships, and a year-long full-time role in the cybersecurity domain, I have amassed various skills. In my years of developing software, I've gained a particular affinity towards backend web development using Node.js/Express.js or Python frameworks like Django and Flask. </p>
        <p></p>
        <p>I adapt quickly. Every role of mine has forced me to learn new technologies from scratch and get good at it. So whether it was learning <a href="https://angular.io/">Angular</a> from the ground up at my internship at <a href="http://tcs.com/">Tata Consultancy Services</a> or learning an obscure functional programming language, <a href="https://github.com/idris-lang/Idris2">Idris 2</a>, for my coursework, I have always been able to improvise, adapt, and overcome. </p>
        <p>In my free time, you can catch me developing my personal project, <em>a Restaurant E-Menu Application</em>, more details below</p>
      </section>

      <Timeline></Timeline>

      {/* <hr className='divider'></hr> */}
      <div className="parallax"></div>

      {/* Project display section */}
      <section className="project-section">
        <h1>I love tinkering with different technologies</h1>
        {projects.length === 0 && <h2>Well my projects was supposed to appear here... something went wrong, try refreshing the page</h2>}
        {projects.length > 0 && <div className="grid">
          {projects.map(project => project)}
        </div>}

      </section>

      <hr className='divider'></hr>

      <section className='contact-section'>
        <h1>Say Hi</h1>
        <ContactBar
          email="mailto:vkalghat@gmail.com"
          linkedin="https://www.linkedin.com/in/vineet-k192/"
          github="https://github.com/vineet192" />
      </section>

    </div>
  );
}

export default Home;
