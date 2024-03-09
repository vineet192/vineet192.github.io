import { useEffect } from 'react'
import './timeline.css'
import { useRef } from 'react';

export default function Timeline(props) {

    const containerRef = useRef(null)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = "translateX(0)"
                entry.target.style.opacity = 1
            }
        })
    }, {
        threshold: 0.8
    })

    useEffect(() => {

        if (!containerRef) {
            return;
        }

        let els = containerRef.current.querySelectorAll('.card')
        console.log(els)

        els.forEach(el => {
            observer.observe(el)
        })
    }, [])

    return (
        <div className='overflow' ref={containerRef}>
            <div className="container">
                <div className="line"></div>
                <div className='left card'>
                    <h1>2024</h1>
                    <h4>Research Assistant @ University at Buffalo</h4>
                    <hr />
                    <p>Led the integration of sentiment analysis into chat interfaces,
                        aiming to enhance online engagement for individuals with disabilities.
                        This involved refining emotion labels into 5 distinct categories and
                        fine-tuning sentiment analysis models using Python and Large Language Models
                        (BERT, RoBERTa) to predict nuanced emotions from conversational utterances.
                    </p>
                </div>
                <div className='right card'>
                    <h1>2022</h1>
                    <h4>University at Buffalo - SUNY</h4>
                    <hr />
                    <p>MS in Computer Science</p>
                    <p>GPA: 3.6/4</p>
                    <ul>
                        <li>Coursework: Algorithms, Information Retrieval, Blockchain, Data Intensive Computing,
                            Data Models and Query Languages, Information Retrieval
                        </li>
                        <li>Winner (Best use of Google cloud) - UB Hacking 2023</li>
                        <li>Winner (1st place) Innovating our Ecosystem</li>
                    </ul>
                </div>
                <div className='left card'>
                    <h1>2021</h1>
                    <h4>System Engineer @ Tata Consultancy Services</h4>
                    <hr />
                    <p>Worked in the subject matter team for a Privileged Access MAnager (CA PAM)
                        on tasks such as onboarding servers onto the privileged manager, configuring
                        user and root accounts, debugging server failures, debugging script failures and
                        drafting reports with SQL. I also led the effort in developing a Python script
                        from scratch that automates the entire process of server onboardings.
                    </p>
                </div>
                <div className='right card'>
                    <h1>2020</h1>
                    <h4>Software Engineer intern @ Tata Consultancy Services</h4>
                    <hr />
                    <p>Built 2 internal tools from scratch - a file parser written in Java with a Dashboard written in Angular, Node.js/Express.js and MongoDB.
                        The second one being a tool to easily search,extract and build Java classes out of XML elements of Android app screens.
                    </p>
                </div>
                <div className='left card'>
                    <h1>2020</h1>
                    <h4>Android developer intern @ Socort Siblings Technology</h4>
                    <hr />
                    <p>Worked on developing features for a customer facing and client facing e-commerce Android application. I led the effort in integrating many APIs, the most notable
                        being Google's Firebase API for phone based authorization which instantly boosted the security of user logins.
                    </p>
                </div>
                <div className='right card'>
                    <h1>2017</h1>
                    <h4>Dr. Ambedkar Institute of Technology</h4>
                    <hr />
                    <p>B.E in Computer Science and Engineering</p>
                    <p>GPA: 8.84/10</p>
                    <ul>
                        <li>Member of the Computer society of India, student chapter</li>
                        <li>Head of the Web Development club</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}