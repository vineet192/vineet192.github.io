import './Home.css';
import '../../Project-Card/Project-Card';
import '../../Education-Card/Education'
import { useEffect, useRef, useState } from 'react';
import ProjectCard from '../../Project-Card/Project-Card';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContactBar from '../../Contact-Bar/Contact';
import Timeline from '../../Timeline/timeline';

function Home() {
  const aboutMeSectionRef = useRef();

  const repoEndpoints = [
    {
      endpoint: "vineet192/vineet192.github.io",
      screenshot: "screenshots/portfolio.png"
    },
    {
      endpoint: "vineet192/Restaurant-Emenu",
      screenshot: "screenshots/emenu.png"
    },
    {
      endpoint: "vineet192/sorting-visualiser",
      screenshot: "screenshots/sorting_visualizer.gif"
    },
    { endpoint: "vineet192/ExamHelper" },
    { endpoint: "vineet192/bert-qa-server" },
    { endpoint: "vineet192/restaurant-emenu-backend" }]

  const [projects, setProjects] = useState([])

  function initProjects() {
    Promise.all(repoEndpoints.map(({ endpoint, screenshot }) => fetch(`https://api.github.com/repos/${endpoint}`)))
      .then(responses => Promise.all(responses.map(res => res.json())))
      .then(repos => {
        repos.forEach((repo, index) => {
          setProjects(prev => [...prev,
          <ProjectCard
            projectTitle={repo.name}
            projectDesc={repo.description ? repo.description : ""}
            projectUrl={repo.html_url}
            key={repo.name}
            screenshot={repoEndpoints[index].screenshot}
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
        <p>A seasoned computer science professional with a Master's degree in Computer Science from the <b>University at Buffalo</b>, specializing in full-stack web development and Machine learning.</p>

        <p>Throughout my tenure as a software developer at <b>Tata Consultancy Services</b>, I spearheaded several initiatives for a prominent Swiss bank, collaborating closely with diverse teams and stakeholders.
        </p>

        <p><b>Python (Django, Flask)</b> and <b>JavaScript (React, Node.js, Express.js, Next.js)</b> are my forte, and I excel in leveraging them across the stack for web development projects.
          From building cloud-based online menu management systems for restaurants to crafting inverted index search engines, I thrive on developing innovative solutions.
          I am also quite proficient in <b>Java</b>.</p>

        <p>I now spend my time learning <b>Go</b> and working as a student researcher at the University at Buffalo, working on an emotion-aware dialogue generation system using <b>Python</b> and <b>Large Language Models</b>.</p>
      </section>

      <Timeline></Timeline>

      {/* <hr className='divider'></hr> */}
      <div className="parallax"></div>


      {/* Project display section */}
      <section className="project-section">
        <h1>Projects</h1>
        {projects.length === 0 && <h2>Well my projects was supposed to appear here... something went wrong, try refreshing the page</h2>}
        {projects.length > 0 && <div className="grid">
          {projects.map(project => project)}
        </div>}

      </section>

      <hr className='divider'></hr>

      <section className='contact-section'>
        <h1>Contact me</h1>
        <ContactBar
          email="mailto:vkalghat@gmail.com"
          linkedin="https://www.linkedin.com/in/vineet-k192/"
          github="https://github.com/vineet192" />
      </section>

    </div>
  );
}

export default Home;
