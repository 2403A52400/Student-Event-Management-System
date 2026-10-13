
let events = [
  { name: "Coding Hackathon", date: "2026-11-10" },
  { name: "AI Workshop", date: "2026-11-15" },
  { name: "Cultural Fest", date: "2026-11-20" }
];

function displayEvents() {
  const list = document.getElementById("event-list");
  const choice = document.getElementById("event-choice");

  list.innerHTML = "";
  choice.innerHTML = '<option value="">Select event</option>';

  events.sort((a, b) => a.date.localeCompare(b.date));
  events.sort((a, b) => a.date.localeCompare(b.date));
  events.forEach(event => {
    const item = document.createElement("div");
    item.className = "event";
    item.textContent = `${event.name} - ${event.date}`;
    list.appendChild(item);

    const option = document.createElement("option");
    option.value = event.name;
    option.textContent = event.name;
    choice.appendChild(option);
  });
}


document.getElementById("registration-form").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("student-name").value.trim();
  const email = document.getElementById("student-email").value.trim();
  const event = document.getElementById("event-choice").value;

  if (!name || !email || !event) {
    document.getElementById("message").textContent =
      "Please fill in all registration details.";
    return;
  }

  document.getElementById("message").textContent =
    `Registration successful for ${name} (${email}) - ${event}.`;

  e.target.reset();
});

document.getElementById("event-form").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("event-name").value.trim();
  const date = document.getElementById("event-date").value;

  if (!name || !date) {
    alert("Please enter the event name and date.");
    return;
  }

  events.push({ name, date });
  displayEvents();
  e.target.reset();
});

displayEvents();
