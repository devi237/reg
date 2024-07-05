document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate username
    if (username == '') {
        alert('Username is required.');
        return;
    }

    // Validate email
    
    if (email == '') {
        alert('Email is required.');
        return;
    } 

    // Validate password
    if (password == '') {
        alert('Password is required.');
        return;
    } 

    // Validate confirm password
    if (confirmPassword == '') {
        alert('Confirm password is required.');
        return;
    } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    alert('Form submitted successfully!');
    document.getElementById('registrationForm').reset();
});