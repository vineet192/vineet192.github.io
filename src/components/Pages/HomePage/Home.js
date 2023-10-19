import './Home.css';
import '../../Project-Card/Project-Card';
import '../../Education-Card/Education'
import { useEffect, useRef, useState } from 'react';
import ProjectCard from '../../Project-Card/Project-Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EducationCard from '../../Education-Card/Education';
import ContactBar from '../../Contact-Bar/Contact';

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
        <p>Hey there! my name is Vineet Kalghatgi and I'm a software developer. Over the course of 2 degrees, 2 internship and a year long full-time role, I have amassed skills in various domains. However, I've got a particular affinity towards backend web development using Node.js/Express.js or Python frameworks like Django and Flask. </p>
        <p>I adapt quick. Every role of mine has forced me to learn new tehcnologies from scratch and get good at it. So whether it was learning <a href="https://angular.io/">Angular</a> from the ground up at my internship at <a href="http://tcs.com/">Tata Consultancy Services</a> or learning an obscure functional programming language, <a href="https://github.com/idris-lang/Idris2">Idris 2</a>, for my coursework, I have always been able to improvise, adapt and overcome. </p>
        <p>In my free time, you can catch me developing my personal project, <em>a Restaurant E-Menu Application</em>, more details below</p>
      </section>

      <hr className='divider'></hr>

      {/* Project display section */}
      <section className="project-section">
        <h1>I love tinkering with different technologies</h1>
        {projects.length === 0 && <h2>Well my projects was supposed to appear here... something went wrong, try refreshing the page</h2>}
        {projects.length > 0 && <div className="grid">
          {projects.map(project => project)}
        </div>}

      </section>

      <hr className='divider'></hr>

      {/* Blog link section */}
      <section className="edu-section">
        <h1>My Education</h1>
        <EducationCard school_name="University at Buffalo - SUNY"
          school_location="Buffalo, NY"
          gpa="3.6/4"
          degree="MS in Computer and Information Science"
          timeline="Aug 2022 - Dec 2023" />
        <EducationCard school_name="Dr. Ambedkar Institute of Technology"
          school_location="Bengaluru, KN"
          gpa="8.84/10"
          degree="BE in Computer Science and Engineering"
          timeline="Aug 2017 - Aug 2021" />

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
