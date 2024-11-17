console.log("JavaScript file successfully linked!");

// footer element by ID - ALL PAGES
const footer = document.getElementById('DianeFooter');

if (footer) {
    const today = new Date();
    const currentYear = today.getFullYear();

    // Update footer content
    footer.innerHTML = `<p>&copy; ${currentYear} Diane Schultze</p>`;

    console.log(`Today's full date is: ${today.toDateString()}`);
}

// Greeting - Home Page
const bodyElement = document.body;
const greetingDiv = document.querySelector('.Greeting');
const currentHour = new Date().getHours();
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

// Button - Portfolio Page
const alertButton = document.getElementById("buttonks");

alertButton.addEventListener("click", function () {
    alert("Click Me");
});

// mouse over
alertButton.addEventListener("mouseover", function () {
    alertButton.innerText = "⬆⬆⬆";
});

// mouse out
alertButton.addEventListener("mouseout", function () {
    alertButton.innerText = "⬆ Works ⬆";
});

