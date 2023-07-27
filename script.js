document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const generateButton = document.getElementById("generate-btn");
  
    // Function to generate a random password
    function generatePassword(length) {
      const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
      let password = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
      }
      return password;
    }
  
    // Event listener for the Generate Password button
    generateButton.addEventListener("click", function () {
      const passwordLength = 12; // You can customize the password length here
      const generatedPassword = generatePassword(passwordLength);
      passwordInput.value = generatedPassword;
    });
  });
  