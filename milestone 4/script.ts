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
function getElementById(): ResumeData {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    return { name, email, phone, education, experience, skills };
}

// Function to display resume
function resumeDisplay(data: ResumeData): void {
    const resumeDisplay = document.getElementById('resume-display');
    if (resumeDisplay) {
        resumeDisplay.innerHTML = `
            <h2>Editable Resume</h2>
            <p><strong>Name:</strong> <span contenteditable="true">${data.name}</span></p>
            <p><strong>Email:</strong> <span contenteditable="true">${data.email}</span></p>
            <p><strong>Phone:</strong> <span contenteditable="true">${data.phone}</span></p>

            <h3>Education</h3>
            <p contenteditable="true">${data.education}</p>

            <h3>Experience</h3>
            <p contenteditable="true">${data.experience}</p>

            <h3>Skills</h3>
            <p contenteditable="true">${data.skills}</p>
        `;
    }
}

// Form submit handler
function HandleFormSubmit(event: Event): void {
    event.preventDefault(); // Prevent form submission
    const formData = getFormData();
    displayResume(formData);
}

// Add event listener to form
const form = document.getElementById('resume-form');
if (Form) {
    Form.addEventListener('submit', handleFormSubmit);
}


