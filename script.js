document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#dateOfBirth", {
        dateFormat: "Y-m-d",
        maxDate: "today",
        onChange: function(selectedDates, dateStr, instance) {
            document.getElementById('dateOfBirth').value = dateStr;
        }
    });
});

function showLogin() {
    transitionPages('welcome', 'login');
}

function generateOTP() {
    const phone = document.getElementById('phone').value;
    if (phone) {
        alert(`OTP has been sent to ${phone}`);
        nextStep('otp');
    } else {
        alert('Please enter your phone number');
    }
}

function verifyOTP() {
    const otpCode = document.getElementById('otpCode').value;
    if (otpCode) {
        alert('OTP verified successfully');
        nextStep('dob');
    } else {
        alert('Please enter the OTP');
    }
}

function nextStep(nextPageId) {
    const currentStep = document.querySelector('.page:not(.hidden)').id;
    transitionPages(currentStep, nextPageId);
}

function completeSignUp() {
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const gender = document.getElementById('genderSelect').value;
    const status = document.getElementById('statusSelect').value;

    if (dateOfBirth && gender && status) {
        alert(`Sign-up complete!\nDOB: ${dateOfBirth}\nGender: ${gender}\nStatus: ${status}`);
        transitionPages('status', 'dashboard');
    } else {
        alert('Please fill in all the details');
    }
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

function logOut() {
    alert('Logged out');
    transitionPages('dashboard', 'welcome');
}

function transitionPages(hide, show) {
    document.getElementById(hide).classList.add('hidden');
    setTimeout(() => {
        document.getElementById(hide).style.display = 'none';
        document.getElementById(show).style.display = 'flex';
        setTimeout(() => {
            document.getElementById(show).classList.remove('hidden');
        }, 10);
    }, 500);
}

function showSection(sectionId) {
    document.querySelectorAll('.info-section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}
