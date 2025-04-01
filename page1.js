/**home k liye */
function showHome() {
    document.getElementById('home-section').style.display = 'block';
    document.getElementById('skills-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('project-section').style.display = 'none';
}
/**skills section  */
function showSkills() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('skills-section').style.display = 'block';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('project-section').style.display = 'none';
}
/**contact us */
function showContact() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('skills-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'block';
    document.getElementById('project-section').style.display = 'none';
}

/** Project Section */
function showProject() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('skills-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('project-section').style.display = 'block';
}



