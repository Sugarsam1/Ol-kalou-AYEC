document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000); // Slide every 5 seconds

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      indicators[i].classList.toggle('active', i === index);
    });
    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  function prevSlide() {
    let prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
  }

  // Arrow navigation
  document.getElementById('nextArrow').addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  document.getElementById('prevArrow').addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  // Optional: Reset the interval on manual nav
  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  // Optional: Click indicators
  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      showSlide(i);
      resetInterval();
    });
  });
});

// 🔹 Back to Top button functionality
const backToTop = document.getElementById("backToTop");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Chatbot elements
const chatbotToggle = document.getElementById("chatbot-toggle");
const chatbotWindow = document.getElementById("chatbot-window");
const chatbotMessages = document.getElementById("chatbot-messages");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotSend = document.getElementById("chatbot-send");

const responses = {
  "hi": "Hey 👋 Welcome to Ol-kalou NGCDF AYEC! How can I help you today?",
  "hey": "Hey 👋 Welcome to Ol-kalou NGCDF AYEC! How can I help you today?",
  "hello": "Hi there 👋 Welcome to Ol-kalou NGCDF AYEC! How can I assist you?",

  "what programs do you offer": "We offer the following programs: <br> 📚 Graphic Design <br> 📚 Digital Marketing <br> 📚 Content Writing <br> 📚 Virtual Assistant <br> 📚 Data Entry & Management <br> 📚 Web Development. <br><br><a href='#programs'>👉 View Programs</a>",

  "how long is the training": "⏳ The training depends on the module. Most modules take 2 weeks to 1 month. However, complex modules like Web Development can take up to 3 months.",

  "is it free": "✅ Yes! Learning is totally free. You only need a valid ID.",

  "how do i join": "📝 Would you like to join us? Call/WhatsApp <strong>0716 607135</strong> or <a href='#contact'>👉 click here to contact us</a>.",
  
  "need more help": "👩‍💻 No problem! You can reach a real person directly:<br><br>📞 Call us: <a href='tel:+254716607135'>0716 607135</a><br>💬 WhatsApp us: <a href='https://wa.me/254716607135' target='_blank'>Chat on WhatsApp</a>"


};


// Toggle chatbot
chatbotToggle.onclick = () => {
  chatbotWindow.style.display = 
    chatbotWindow.style.display === "flex" ? "none" : "flex";
};

// Send message function
function sendMessage() {
  const userMsg = chatbotInput.value.trim().toLowerCase();
  if (!userMsg) return;

  // Show user message
  chatbotMessages.innerHTML += `<div class="user">${chatbotInput.value}</div>`;
  chatbotInput.value = "";

  // Bot reply
  let reply = "🤔 I’m not sure about that. Please check our Programs section or call us at 0716 607135.";
  for (let q in responses) {
    if (userMsg.includes(q)) {
      reply = responses[q];
      break;
    }
  }
  chatbotMessages.innerHTML += `<div class="bot">${reply}</div>`;

  // Auto scroll
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Send via button
chatbotSend.onclick = sendMessage;

// Send via Enter key
chatbotInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

// Quick buttons functionality
document.querySelectorAll("#chatbot-quick-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    chatbotInput.value = btn.getAttribute("data-question");
    sendMessage();
  });
});

// === Hamburger menu ===
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links li a");

// Toggle menu on hamburger click
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Auto-close menu after clicking a link (on mobile)
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
