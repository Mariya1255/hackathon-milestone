// Interface for form data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

// Function to get form data
function getFormData(): ResumeData {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    return { name, email, phone, education, experience, skills };
}

// Function to display resume
function displayResume(data: ResumeData): void {
    const resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay) {
        resumeDisplay.innerHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <h3>Education</h3>
            <p>${data.education}</p>
            <h3>Experience</h3>
            <p>${data.experience}</p>
            <h3>Skills</h3>
            <p>${data.skills}</p>
        `;
    }
}

// Form submit handler
function handleFormSubmit(event: Event): void {
    event.preventDefault(); // Prevent form submission
    const formData = getFormData();
    displayResume(formData);
}

// Add event listener to form
const Form = document.getElementById('resume-form');
if (Form) {
    Form.addEventListener('submit', handleFormSubmit);
}


