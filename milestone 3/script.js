// Function to get form data
function getFormData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    return { name: name, email: email, phone: phone, education: education, experience: experience, skills: skills };
}
// Function to display resume
function displayResume(data) {
    var resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay) {
        resumeDisplay.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(data.name, "</p>\n            <p><strong>Email:</strong> ").concat(data.email, "</p>\n            <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(data.education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(data.experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(data.skills, "</p>\n        ");
    }
}
// Form submit handler
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    var formData = getFormData();
    displayResume(formData);
}
// Add event listener to form
var Form = document.getElementById('resume-form');
if (Form) {
    Form.addEventListener('submit', handleFormSubmit);
}
