var content = (function () {
  "use strict";

  // Fill form fields function
  function fillFormFields() {
    try {
      // Example fields
      const firstNameField = document.querySelector('input[name="firstName"], input[id="firstName"], input[class*="firstName"]');
      const emailField = document.querySelector('input[name="email"], input[id="email"], input[class*="email"]');
      const addressField = document.querySelector('input[name="address"], input[id="address"], input[class*="address"]');
      const phoneField = document.querySelector('input[name="phone"], input[id="phone"], input[class*="phone"]');

      if (firstNameField) {
        firstNameField.value = "John";
        console.log("Filled First Name");
      } else {
        console.log("First Name field not found");
      }

      if (emailField) {
        emailField.value = "john.doe@example.com";
        console.log("Filled Email");
      } else {
        console.log("Email field not found");
      }

      if (addressField) {
        addressField.value = "123 Main St";
        console.log("Filled Address");
      } else {
        console.log("Address field not found");
      }

      if (phoneField) {
        phoneField.value = "1234567890";
        console.log("Filled Phone");
      } else {
        console.log("Phone field not found");
      }
    } catch (error) {
      console.error("Error filling form fields:", error);
    }
  }

  // Wait for the form to load using MutationObserver
  function waitForForm() {
    const targetNode = document.body;
    const config = { childList: true, subtree: true };

    const callback = function (mutationsList, observer) {
      for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
          // Check if the form has loaded
          if (document.querySelector('input[name="firstName"], input[id="firstName"], input[class*="firstName"]')) {
            fillFormFields();
            observer.disconnect();
            break;
          }
        }
      }
    };

    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);

    // Fallback in case MutationObserver doesn't catch the form loading
    setTimeout(() => {
      fillFormFields();
      observer.disconnect();
    }, 5000);
  }

  // Run the script
  waitForForm();
})();
