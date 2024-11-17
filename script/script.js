console.log("JavaScript file successfully linked!");

// Target the footer element by ID
const footer = document.getElementById('DianeFooter');

// Ensure the footer exists before trying to modify it
if (footer) {
    // Get the current year dynamically
    const today = new Date();
    const currentYear = today.getFullYear();

    // Update the footer content
    footer.innerHTML = `<p>&copy; ${currentYear} Diane Schultze</p>`;

    // Log today's full date to the developer console
    console.log(`Today's full date is: ${today.toDateString()}`);
}

// Get the <body> element
const bodyElement = document.body;

// Get the <div> with the class "Greeting"
const greetingDiv = document.querySelector('.Greeting');

// Get the current hour
const currentHour = new Date().getHours();

// Create a greeting message and assign a class
let greetingMessage = ""; // Initialize an empty greeting

if (currentHour < 12) {
    // Before 12 PM - Morning
    bodyElement.className = 'morning';
    greetingMessage = "☀️ Good Morning!";
} else if (currentHour < 17) {
    // Between 12 PM and 5 PM - Afternoon
    bodyElement.className = 'afternoon';
    greetingMessage = "☁️ Good Afternoon!";
} else {
    // After 5 PM - Evening
    bodyElement.className = 'evening';
    greetingMessage = "🌙 Good Evening!";
}

// Check if the Greeting <div> exists
if (greetingDiv) {
    // Update the text content of the <div>
    greetingDiv.textContent = greetingMessage;
} else {
    console.warn("Greeting <div> not found!");
}

