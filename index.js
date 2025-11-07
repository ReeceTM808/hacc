const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Example HR FAQ responses
const responses = {
  "family leave": "You can apply for family leave by submitting a leave request in the UH Self-Service portal under 'Leave Management'.",
  "vacation": "Vacation leave requests should be submitted to your supervisor via the UH Employee Self-Service portal.",
  "benefits": "UH benefits can be viewed and updated during open enrollment or when you have a qualifying life event.",
  "telework": "UH’s Telework Policy defines eligibility and approval steps. You can find it on the HR website under 'Work Arrangements'.",
  "default": "I’m not sure about that. You can visit the UH HR website for detailed information or contact HR directly."
};

// Send message
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  displayMessage(message, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotResponse(message);
    displayMessage(reply, "bot");
  }, 700);
}

function displayMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add(sender === "user" ? "user-message" : "bot-message");
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();
  if (input.includes("family leave")) return responses["family leave"];
  if (input.includes("vacation")) return responses["vacation"];
  if (input.includes("benefits")) return responses["benefits"];
  if (input.includes("telework")) return responses["telework"];
  return responses["default"];
}
