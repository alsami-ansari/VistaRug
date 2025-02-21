const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


// form handle

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", sendMail);
});

function sendMail(event) {
  event.preventDefault();

  // Disable the submit button to prevent multiple submissions
  const submitButton = document.querySelector(".submit-btn");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  let params = {
      name: document.getElementById("name").value,
      number: document.getElementById("number").value,
      email: document.getElementById("email").value,
      pincode: document.getElementById("pincode").value,
      description: document.getElementById("description").value,
  };

  emailjs.send("service_edn59tm", "template_ppktabs", params)
      .then(function(response) {
          showCustomAlert("Successfully Submitted!", "success");
          // console.log("SUCCESS!", response);

          // Clear the form fields
          document.getElementById("contactForm").reset();

          // Re-enable the submit button
          submitButton.disabled = false;
          submitButton.textContent = "Submit";
      })
      .catch(function(error) {
          showCustomAlert("Submission Failed!", "error");
          // console.error("FAILED...", error);

          // Re-enable the submit button in case of failure
          submitButton.disabled = false;
          submitButton.textContent = "Submit";
      });
}

function showCustomAlert(message, type) {
  const customAlert = document.getElementById("customAlert");
  const customAlertMessage = document.getElementById("customAlertMessage");

  // Set the message and type
  customAlertMessage.textContent = message;
  customAlert.classList.remove("success", "error");
  customAlert.classList.add(type);

  // Show the alert
  customAlert.classList.add("show");

  // Hide the alert after 3 seconds
  setTimeout(function() {
      customAlert.classList.remove("show");
  }, 5000);
}
