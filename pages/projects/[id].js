import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import Link from 'next/link'

import ProjectData from '/public/projects.json'

function Project() {
    const router = useRouter()
    const { id } = router.query

    // console.log(ProjectData["test1"]);

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
                    <title>{id}</title>
                    <link rel="stylesheet" href="../stylesheets/styles.css" />
                </>
            </Head>
            <div className="wrapper">
                <nav className="side-nav">
                    <ul>
                        <li>
                            <Link href="/home">
                                <button type="button" className="side-nav-name" id="go-to-front">
                                    Tevin Park
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/home#about">
                                <button type="button" id="go-to-about">
                                    About
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/home#skills">
                                <button type="button" id="go-to-skills">
                                    Skills
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/home#education">
                                <button type="button" id="go-to-education">
                                    Education
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/home#experience">
                                <button type="button" id="go-to-experience">
                                    Experience
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/home#projects">
                                <button type="button" id="go-to-projects">
                                    Projects
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/home#contact">
                                <button type="button" id="go-to-contact">
                                    Contact
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className='projects'>
                    {
                        ProjectData && ProjectData.map(project => {
                            if (project.id == id) {
                                return (
                                    <div className='project-page-front'>
                                        <div className='project-page-front-desc'>
                                            <h1 className='project-page-front-name'>{ project.name }</h1>
                                            <hr className="main-header-line" />
                                            <h2 className='project-page-front-type-info'>{ project.type }</h2>
                                            <h2 className='project-page-front-type-info'>{ project.date }</h2>
                                        </div>
                                        <img
                                            className="project-page-front-img"
                                            src={ project.mainImage }
                                            alt={ project.mainImage }
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                    <section className='project-page-showcase-container'>
                        {
                            ProjectData && ProjectData.map(project => {
                                if (project.id == id) {
                                    return (
                                        <div className={project.imageDivClass}>
                                            {project.images && project.images.map(images => {
                                                return (
                                                    <img
                                                        className={images.imageClass}
                                                        src={images.imageLink}
                                                        alt={images.imageLink}
                                                    ></img>
                                                )
                                            })
                                            }
                                        </div>
                                    )
                                }
                            })
                        }
                        {/* <img
                            className="project-page-showcase-img"
                            src="../images/gray.jpg"
                            alt="gray"
                        /> */}
                    </section>
                    <section className="project-page-tools-used">
                        <h2 className="section-title">Tools Used</h2>
                        <hr className="header-line" />
                        {
                            ProjectData && ProjectData.map(project => {
                                if (project.id == id) {
                                    return (
                                        <div className="project-page-tools-used-container">
                                            {project.tools && project.tools.map(tools => {
                                                return (
                                                    <div className="skills-box">
                                                        <img
                                                            src={tools.toolImg}
                                                            alt={tools.toolImg}
                                                        ></img>
                                                        <p>{tools.toolName}</p>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    )
                                }
                            })
                        }
                        {/* <div className="project-page-tools-used-container">
                            <div className="skills-box">
                                <img src="../images/gray.jpg" alt="gray" />
                                <p>Tool</p>
                            </div>
                            <div className="skills-box">
                                <img src="../images/gray.jpg" alt="gray" />
                                <p>Tool</p>
                            </div>
                            <div className="skills-box">
                                <img src="../images/gray.jpg" alt="gray" />
                                <p>Tool</p>
                            </div>
                            <div className="skills-box">
                                <img src="../images/gray.jpg" alt="gray" />
                                <p>Tool</p>
                            </div>
                            <div className="skills-box">
                                <img src="../images/gray.jpg" alt="gray" />
                                <p>Tool</p>
                            </div>
                            <div className="skills-box">
                                <img src="../images/gray.jpg" alt="gray" />
                                <p>Tool</p>
                            </div>
                        </div> */}
                    </section>
                    <section className="project-page-overview">
                        <h2 className="section-title">Overview</h2>
                        <hr className="header-line" />
                        {
                            ProjectData && ProjectData.map(project => {
                                if (project.id == id) {
                                    return (
                                        <div>
                                            {project.overview && project.overview.map(overview => {
                                                return (
                                                    <div>
                                                        <p className='overview-text'>{overview}</p>
                                                    </div>
                                                )
                                            })
                                            }
                                        </div>
                                    )
                                }
                            })
                        }
                        {/* <p className='overview-text'>
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            <br />
                            <br />
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            <br />
                            <br />
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                            Some description about this project that is explains the project in detail.
                        </p> */}
                    </section>
                    <section>
                        <h2 className="section-title">Other Projects</h2>
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
                                    <img src="../images/gray.jpg" alt="gray" />
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
                                    <img src="../images/gray.jpg" alt="gray" />
                                </div>
                                <div className="project-box-background" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Project;