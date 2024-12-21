// Contact Form JavaScript
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Show a success message (you can also send the data to a server here)
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Thank you for reaching out, " + name + "! I will get back to you soon.";
  
    // Optional: Clear the form
    document.getElementById("contactForm").reset();
  });
  