import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
    return (
        <>
        <Head>
        <>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap"
                rel="stylesheet"
            />
            <title>Tevin Park</title>
            <link rel="stylesheet" href="./stylesheets/styles.css" />
            </>
        </Head>
    <div class="wrapper">
        <div className="side-nav-wrapper">
          <nav className="side-nav">
            <ul>
              <li>
                <button type="button" className="side-nav-name" id="go-to-front">
                  Tevin Park
                </button>
              </li>
              <li>
                <button type="button" id="go-to-about">
                  About
                </button>
              </li>
              <li>
                <button type="button" id="go-to-skills">
                  Skills
                </button>
              </li>
              <li>
                <button type="button" id="go-to-education">
                  Education
                </button>
              </li>
              <li>
                <button type="button" id="go-to-experience">
                  Experience
                </button>
              </li>
              <li>
                <button type="button" id="go-to-projects">
                  Projects
                </button>
              </li>
              <li>
                <button type="button" id="go-to-contact">
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="home">
          <section className="front" id="front">
            <div className="front-div">
              <h1 className="intro-phrase">Hi, my name is</h1>
              <h1 className="intro-name">Tevin Park</h1>
              <hr className="main-header-line" />
              <h2 className="intro-desc">Some quick description of myself.</h2>
              <div className="front-div-button-div">
                <button type="button">
                  <p className="front-div-button-text">Resume</p>
                  <img
                    className="front-div-button-img"
                    src="./images/gray.jpg"
                    alt="gray"
                  />
                </button>
                <button type="button">
                  <p className="front-div-button-text">GitHub</p>
                  <img
                    className="front-div-button-img"
                    src="./images/gray.jpg"
                    alt="gray"
                  />
                </button>
                <button type="button">
                  <p className="front-div-button-text">LinkedIn</p>
                  <img
                    className="front-div-button-img"
                    src="./images/gray.jpg"
                    alt="gray"
                  />
                </button>
              </div>
            </div>
          </section>
          <section className="about-section" id="about">
            <h2 className="section-title">About</h2>
            <hr className="header-line" />
            <p className="about-body">
              Some longer description about myself. Some longer description about
              myself. Some longer description about myself. Some longer description
              about myself. Some longer description about myself. Some longer
              description about myself. Some longer description about myself. Some
              longer description about myself. Some longer description about myself.
            </p>
          </section>
          <section className="skils-section" id="skills">
            <h2 className="section-title">Skills</h2>
            <hr className="header-line" />
            <h3 className="skills-class">Languages</h3>
            <div className="skills-box-div">
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>Java</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>HTML</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>CSS</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>Javascript</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>C</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>C++</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>C#</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>Python</p>
              </div>
            </div>
            <h3 className="skills-class">Technology</h3>
            <div className="skills-box-div">
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>Express.js</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>MongoDB</p>
              </div>
            </div>
            <h3 className="skills-class">Tools</h3>
            <div className="skills-box-div">
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>Unreal Engine</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>Unity</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>Autodesk Inventor</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>Blender</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>Figma</p>
              </div>
              <div className="skills-box">
                <img src="./images/gray.jpg" alt="gray" />
                <p>Flutter</p>
              </div>
            </div>
          </section>
          <section className="education-section" id="education">
            <h2 className="section-title">Education</h2>
            <hr className="header-line" />
            <div className="education-div">
              <div>
                <p className="education-school">Vanderbilt University</p>
                <p className="education-dates">August 2023 - May 2027</p>
                <p className="education-desc">
                  Bachelor of Science
                  <br />
                  Major - Computer Science
                  <br />
                  Minor - Business
                  <br />
                </p>
              </div>
              <img src="./images/gray.jpg" alt="gray" />
            </div>
          </section>
          <section className="experience-section" id="experience">
            <h2 className="section-title">Experience</h2>
            <hr className="header-line" />
          </section>
          <section className="projects-section" id="projects">
            <h2 className="section-title">Projects</h2>
            <hr className="header-line" />
            <div className="project-box-div">
              <div
                className="project-box"
                onclick="window.location.href = 'project_macroplanner.html';"
              >
                <div className="project-box-desc">
                  <div>
                    <p className="project-box-desc-name">MacroPlanner</p>
                    <p className="project-box-desc-type">Website</p>
                    <p className="project-box-desc-description">
                      Allows users to search for recipes based on personal
                      macronutrient needs.
                    </p>
                    <p className="project-box-desc-techused">Used: [ ] [ ] [ ] [ ]</p>
                  </div>
                  <img src="./images/gray.jpg" alt="gray" />
                </div>
                <div className="project-box-background" />
              </div>
              <div className="project-box">
                <div className="project-box-desc">
                  <div>
                    <p className="project-box-desc-name">ChaseDown</p>
                    <p className="project-box-desc-type">Game</p>
                    <p className="project-box-desc-description">
                      First-person action, racing, shooter game
                    </p>
                    <p className="project-box-desc-techused">Used: [ ] [ ] [ ] [ ]</p>
                  </div>
                  <img src="./images/gray.jpg" alt="gray" />
                </div>
                <div className="project-box-background" />
              </div>
              <div className="project-box">
                <div className="project-box-desc">
                  <div>
                    <p className="project-box-desc-name">LyfeGoals</p>
                    <p className="project-box-desc-type">App</p>
                    <p className="project-box-desc-description">
                      Allows users to organize daily plans and track their calories.
                    </p>
                    <p className="project-box-desc-techused">Used: [ ] [ ] [ ] [ ]</p>
                  </div>
                  <img src="./images/gray.jpg" alt="gray" />
                </div>
                <div className="project-box-background" />
              </div>
            </div>
          </section>
          <section className="contact-section" id="contact">
            <h2 className="section-title">Contact</h2>
            <hr className="header-line" />
            <p>
              this is where contact goes
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </p>
          </section>
        </div>
        <Script src="./js/index.js"></Script>
    </div>
      </>
    
    )
}