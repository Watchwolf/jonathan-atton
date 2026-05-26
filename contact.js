// Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const errorMessage = document.getElementById('errorMessage');
    const submitBtn = contactForm?.querySelector('button[type="submit"]');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Disable submit button
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...';
        }

        // Clear previous error messages
        errorMessage.style.display = 'none';

        // Collect form data
        const formData = {
            firstName: document.getElementById('firstName').value.trim(),
            lastName: document.getElementById('lastName').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim(),
            recipient: "website",
            eventId: null,
            // Additional metadata for better email context
            source: "portfolio_contact_form",
            timestamp: new Date().toISOString()
        };

        // Validate data before sending
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
            showError('Veuillez remplir tous les champs');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Envoyer';
            }
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showError('Veuillez entrer une adresse email valide');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Envoyer';
            }
            return;
        }

        try {
            const response = await fetch('https://server.canicompet.com/fr/accounts/ws_public/Contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                timeout: 10000 // 10 second timeout
            });

            if (response.ok) {
                // Success: animate form out, show success message
                showSuccessState();
                resetForm();
            } else {
                throw new Error(`Server returned ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            showError('Une erreur est survenue. Veuillez réessayer ou m\'envoyer un email directement.');

            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Envoyer';
            }
        }
    });

    // Success animation
    function showSuccessState() {
        const formContainer = document.getElementById('contactFormContainer');
        const successState = document.getElementById('successState');

        if (!formContainer || !successState) return;

        // Fade out form
        formContainer.style.transition = 'all 0.5s ease';
        formContainer.style.opacity = '0';
        formContainer.style.transform = 'translateY(-20px)';

        setTimeout(() => {
            formContainer.style.display = 'none';
            successState.style.display = 'block';
            successState.style.opacity = '0';
            successState.style.transform = 'translateY(20px)';

            // Force reflow to trigger animation
            successState.offsetHeight;

            successState.style.transition = 'all 0.5s ease';
            successState.style.opacity = '1';
            successState.style.transform = 'translateY(0)';
        }, 500);
    }

    // Reset form for sending another message
    const resetFormBtn = document.getElementById('resetForm');
    if (resetFormBtn) {
        resetFormBtn.addEventListener('click', () => {
            const formContainer = document.getElementById('contactFormContainer');
            const successState = document.getElementById('successState');

            successState.style.transition = 'all 0.5s ease';
            successState.style.opacity = '0';
            successState.style.transform = 'translateY(-20px)';

            setTimeout(() => {
                successState.style.display = 'none';
                formContainer.style.display = 'block';
                formContainer.style.opacity = '0';
                formContainer.style.transform = 'translateY(20px)';

                // Force reflow
                formContainer.offsetHeight;

                formContainer.style.transition = 'all 0.5s ease';
                formContainer.style.opacity = '1';
                formContainer.style.transform = 'translateY(0)';

                // Reset form fields
                contactForm.reset();

                // Re-enable submit button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Envoyer';
                }
            }, 500);
        });
    }

    // Show error message
    function showError(message) {
        errorMessage.innerHTML = `<i class="fa-solid fa-exclamation-circle"></i> <span>${message}</span>`;
        errorMessage.style.display = 'block';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Reset form state
    function resetForm() {
        contactForm.reset();
    }
});