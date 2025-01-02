const users = {
    "member123": "password123",
    "johnDoe": "johnPassword",
    "member": "memberPass",
    "alice": "alice123"
  };
  
  function validateForm() {
    // Get the user input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Check if the username exists in the users object and if the password matches
    if (users[username] && users[username] === password) {
      // If correct, redirect to the new page (replace 'home.html' with your actual file)
      window.location.href = "memberPage.html"; // Open the next page
      return false; // Prevent form submission since we're using JavaScript for redirection
    } else {
      // If incorrect, show an error message
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "Incorrect username or password. Please try again.";
      return false; // Prevent form submission to show the error message
    }
  }
