document.getElementById('eventButton').addEventListener('click', function() {
    document.getElementById('events').innerHTML = '<p style="color:white">EVENT 1<br />Campus Marathon</p><p style="color: white">EVENT 2<br />Tech Talk</p>';
});

// Listen for clicks on the "Register" button to show the form
document.getElementById('registerButton').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'block'; // Show the form
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the actual form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    document.getElementById('registrationResult').innerHTML = `<p style="color:white">Thank you, ${name}, for registering! A confirmation email has been sent to ${email}.</p>`;
    document.getElementById('registerForm').reset(); // Reset form fields
    document.getElementById('registerForm').style.display = 'none'; // Optionally hide the form again after submission
});
