/* Form Navigation */
function showForm(formType) {
    const patientForm = document.getElementById('patient-form');
    const volunteerForm = document.getElementById('volunteer-form');
    const successMessage = document.getElementById('success-message');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hide all sections
    patientForm.classList.add('hidden');
    volunteerForm.classList.add('hidden');
    successMessage.classList.add('hidden');

    // Remove active class from all nav links
    navLinks.forEach(link => link.classList.remove('active'));

    // Show selected form and add active class
    if (formType === 'patient') {
        patientForm.classList.remove('hidden');
        navLinks[0].classList.add('active');
    } else if (formType === 'volunteer') {
        volunteerForm.classList.remove('hidden');
        navLinks[1].classList.add('active');
    }
}

/* Form Submission */
function submitForm(event, formType) {
    event.preventDefault();

    // Get form data
    const form = formType === 'patient' ? 
        document.getElementById('patientForm') : 
        document.getElementById('volunteerForm');
    
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Simulate sending to backend (in real app, use fetch to API)
    console.log(`${formType.toUpperCase()} Registration:`, data);

    // Show success message
    const successMessage = document.getElementById('success-message');
    const successText = document.getElementById('success-text');
    
    if (formType === 'patient') {
        successText.innerHTML = `<strong>${data.name}</strong>, your healthcare support request has been received. Our volunteers will contact you within 24 hours.<br><br>📞 Confirmation sent to: ${data.email}`;
    } else {
        successText.innerHTML = `Thank you <strong>${data.name}</strong>! Your volunteer profile is now active. You'll start receiving support requests that match your expertise.<br><br>📧 Welcome email sent to: ${data.email}`;
    }

    // Show success, hide form
    document.getElementById('patient-form').classList.add('hidden');
    document.getElementById('volunteer-form').classList.add('hidden');
    successMessage.classList.remove('hidden');
}

/* Reset Form */
function resetForm() {
    document.getElementById('patientForm').reset();
    document.getElementById('volunteerForm').reset();
    showForm('patient');
}

// Local storage for storing registered users (demo purposes)
function saveUserData(data, type) {
    let users = JSON.parse(localStorage.getItem(`${type}s`) || '[]');
    users.push({
        ...data,
        registeredAt: new Date().toISOString()
    });
    localStorage.setItem(`${type}s`, JSON.stringify(users));
}
