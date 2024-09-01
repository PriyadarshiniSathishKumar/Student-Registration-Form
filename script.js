document.addEventListener('DOMContentLoaded', function () {
  // Password confirmation validation
  function checkPassword() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const message = document.getElementById("message");

    if (password.length > 0) {
      if (password === confirmPassword) {
        message.textContent = "Passwords match";
        message.style.color = "#00FF00";
        confirmPasswordField.style.border = '1px solid #00FF00';
      } else {
        message.textContent = "Passwords do not match";
        message.style.color = "#FF0000";
        confirmPasswordField.style.border = '1px solid #FF0000';
      }
    } else {
      alert("All details are compulsory. Please fill all details.");
      message.textContent = "";
      confirmPasswordField.style.border = '';
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    // Password confirmation validation
    function checkPassword() {
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
      const message = document.getElementById("message");
  
      if (password.length > 0) {
        if (password === confirmPassword) {
          message.textContent = "Passwords match";
          message.style.color = "#00FF00";
          confirmPasswordField.style.border = '1px solid #00FF00';
        } else {
          message.textContent = "Passwords do not match";
          message.style.color = "#FF0000";
          confirmPasswordField.style.border = '1px solid #FF0000';
        }
      } else {
        alert("All details are compulsory. Please fill all details.");
        message.textContent = "";
        confirmPasswordField.style.border = '';
      }
    }
  
    // Attach event listeners for password validation
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");
  
    passwordField.addEventListener('input', checkPassword);
    confirmPasswordField.addEventListener('input', checkPassword);
  
    // File size validation
    const uploadField = document.getElementById("myfile");
  
    uploadField.addEventListener('change', function () {
      const file = this.files[0];
      if (file && file.size > 102400) { // 100KB in bytes
        alert("File is too big! File size should be 100KB.");
        this.value = ""; // Clear the input
      }
    });
  
    // Show success message after successful registration
    document.getElementById('registration-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      var password = document.getElementById('password').value;
      var confirmPassword = document.getElementById('confirm-password').value;
  
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
      } else {
        // Show success message
        document.getElementById('success-message').style.display = 'block';
  
        // Optionally reset the form
        this.reset();
      }
    });
  });
  

  // Attach event listeners for password validation
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirm-password");

  passwordField.addEventListener('input', checkPassword);
  confirmPasswordField.addEventListener('input', checkPassword);

  // File size validation
  const uploadField = document.getElementById("myfile");

  uploadField.addEventListener('change', function () {
    const file = this.files[0];
    if (file && file.size > 102400) { // 100KB in bytes
      alert("File is too big! File size should be 100KB.");
      this.value = ""; // Clear the input
    }
  });
});
