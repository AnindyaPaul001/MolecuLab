const text = "Hello, Welcome to MolecuLab";
let index = 0;
const typingSpeed = 150; // Speed of typing in milliseconds
const secondSentence = "This is the next line coming up!";

function typeText() {
    const contentDiv = document.getElementById("content");

    // Add the next character to the text content
    contentDiv.textContent += text.charAt(index);

    // Create and append the cursor after typing a character
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    cursor.textContent = '|';
    contentDiv.appendChild(cursor);

    // Increment the index for the next character
    index++;

    // Blink the cursor for a short time (after the character is typed)
    setTimeout(() => {
        cursor.remove(); // Remove the cursor
        if (index < text.length) {
            typeText(); // Continue typing the next character
        } else {
            // Once typing is finished, add a final blinking cursor
            //addFinalCursor();
            //addSecondLine();
        }
    }, typingSpeed); // Cursor blinks for the duration of typingSpeed
    // Function to add the cursor continuously after all text is typed
/*function addFinalCursor() {
    const contentDiv = document.getElementById("content");
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    cursor.textContent = '|';
    contentDiv.appendChild(cursor); // Append the final blinking cursor
}*/
/*function addSecondLine() {
    const secondLineDiv = document.getElementById("second-line");
    secondLineDiv.textContent = secondSentence; // Set the second sentence text
    secondLineDiv.style.animation = 'moveUp 3s ease-out forwards';
}*/
}

// Start typing once the page loads
window.onload = typeText;

const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    let startX = 0;
    let endX = 0;
    const startY = 10;
    const endY = 10;

    // Set the maximum length for the line
    const maxLength = 300;

    function animateLine() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = '#3498db';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Update the end position of the line to create an animation effect
      if (endX < maxLength) {
        endX += 5; // Increase by 5 pixels per frame
        requestAnimationFrame(animateLine); // Continue the animation
      }
    }

    animateLine(); // Start the animation

    function addTextShadow(element) {
        element.style.textShadow = '2px 2px 8px rgba(184, 231, 16,1)';
      }
  
      function removeTextShadow(element) {
        element.style.textShadow = 'none';
      }

    function goToAdminLogin(){
        window.location.href = 'adminLogin.html';
    }
    function goToMemberLogin(){
        window.location.href = 'memberLogin.html';
    }