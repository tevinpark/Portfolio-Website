const front = document.getElementById("front");
const about = document.getElementById("about");
const skills = document.getElementById("skills");
const education = document.getElementById("education");
const experience = document.getElementById("experience");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

const goToFront = document.getElementById("go-to-front");
const goToAbout = document.getElementById("go-to-about");
const goToSkills = document.getElementById("go-to-skills");
const goToEducation = document.getElementById("go-to-education");
const goToExperience = document.getElementById("go-to-experience");
const goToProjects = document.getElementById("go-to-projects");
const goToContact = document.getElementById("go-to-contact");

goToFront.addEventListener("click", () => {
    front.scrollIntoView({behavior: "smooth", block: "center"});
});
goToAbout.addEventListener("click", () => {
    if(about.clientHeight < window.innerHeight-100){
        about.scrollIntoView({behavior: "smooth", block: "center"});
    }else{
        about.scrollIntoView({behavior: "smooth", block: "start"});
    }
});
goToSkills.addEventListener("click", () => {
    if(skills.clientHeight < window.innerHeight-100){
        skills.scrollIntoView({behavior: "smooth", block: "center"});
    }else{
        skills.scrollIntoView({behavior: "smooth", block: "start"});
    }
});
goToEducation.addEventListener("click", () => {
    if(education.clientHeight < window.innerHeight-100){
        education.scrollIntoView({behavior: "smooth", block: "center"});
    }else{
        education.scrollIntoView({behavior: "smooth", block: "start"});
    }
});
goToExperience.addEventListener("click", () => {
    if(experience.clientHeight < window.innerHeight-100){
        experience.scrollIntoView({behavior: "smooth", block: "center"});
    }else{
        experience.scrollIntoView({behavior: "smooth", block: "start"});
    }
});
goToProjects.addEventListener("click", () => {
    if(projects.clientHeight < window.innerHeight-100){
        projects.scrollIntoView({behavior: "smooth", block: "center"});
    }else{
        projects.scrollIntoView({behavior: "smooth", block: "start"});
    }
});
goToContact.addEventListener("click", () => {
    if(contact.clientHeight < window.innerHeight-100){
        contact.scrollIntoView({behavior: "smooth", block: "center"});
    }else{
        contact.scrollIntoView({behavior: "smooth", block: "start"});
    }
});