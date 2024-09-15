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
        resumeDisplay.innerHTML = "\n            <h2>Editable Resume</h2>\n            <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(data.name, "</span></p>\n            <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(data.email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(data.phone, "</span></p>\n\n            <h3>Education</h3>\n            <p contenteditable=\"true\">").concat(data.education, "</p>\n\n            <h3>Experience</h3>\n            <p contenteditable=\"true\">").concat(data.experience, "</p>\n\n            <h3>Skills</h3>\n            <p contenteditable=\"true\">").concat(data.skills, "</p>\n        ");
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
