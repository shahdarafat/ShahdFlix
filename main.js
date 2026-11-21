document.addEventListener("DOMContentLoaded", () => {
  const heroSignup = document.getElementById("heroSignup");
  if (heroSignup) {
    heroSignup.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = document.getElementById("heroEmail").value.trim();
      if (email) window.location.href = `register.html?email=${encodeURIComponent(email)}`;
    });
  }

  const params = new URLSearchParams(window.location.search);
  const emailField = document.getElementById("registerEmail");
  if (emailField && params.get("email")) emailField.value = params.get("email");

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const password = document.getElementById("registerPassword").value;
      const confirm = document.getElementById("confirmPassword").value;
      const message = document.getElementById("registerMessage");
      if (password !== confirm) {
        message.textContent = "Passwords do not match. Please try again.";
        message.style.color = "#ff7777";
        return;
      }
      message.textContent = "Registration form validated successfully! This demo does not create a real account.";
      message.style.color = "#8be0a4";
      registerForm.reset();
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const message = document.getElementById("loginMessage");
      message.textContent = "Login form submitted successfully (demo only — no real authentication is connected).";
      message.style.color = "#8be0a4";
    });
  }
});
