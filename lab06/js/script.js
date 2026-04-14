(function () {
  const form = document.getElementById("applicationForm");
  const toggleTermsButton = document.getElementById("toggleTerms");
  const termsModalOverlay = document.getElementById("termsModalOverlay");
  const closeTermsModalButton = document.getElementById("closeTermsModal");
  const summaryError = document.getElementById("formSummaryError");

  const fields = {
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    username: document.getElementById("username"),
    password: document.getElementById("password"),
    confirmPassword: document.getElementById("confirmPassword"),
    email: document.getElementById("email"),
    streetAddress: document.getElementById("streetAddress"),
    suburb: document.getElementById("suburb"),
    postcode: document.getElementById("postcode"),
    mobile: document.getElementById("mobile"),
    dob: document.getElementById("dob"),
    jobCategory: document.getElementById("jobCategory")
  };

  function setError(fieldName, message) {
    const errorElement = document.getElementById(fieldName + "Error");
    const fieldElement = fields[fieldName];

    if (errorElement) {
      errorElement.textContent = message;
    }

    if (fieldElement) {
      fieldElement.classList.toggle("invalid", message.length > 0);
    }
  }

  function validateName(value, fieldName, label) {
    const namePattern = /^[A-Za-z]+$/;
    if (!value.trim()) {
      setError(fieldName, label + " is required.");
      return false;
    }
    if (!namePattern.test(value.trim())) {
      setError(fieldName, label + " must contain letters only.");
      return false;
    }
    setError(fieldName, "");
    return true;
  }

  function validateUsername() {
    const value = fields.username.value.trim();
    if (!value) {
      setError("username", "Username is required.");
      return false;
    }
    if (value.length < 3) {
      setError("username", "Username must be at least 3 characters.");
      return false;
    }
    setError("username", "");
    return true;
  }

  function validatePassword() {
    const value = fields.password.value;
    const specialPattern = /[!@#$%^&*()\-_=+]/;
    if (!value) {
      setError("password", "Password is required.");
      return false;
    }
    if (value.length < 8) {
      setError("password", "Password must be at least 8 characters.");
      return false;
    }
    if (!specialPattern.test(value)) {
      setError("password", "Password must include at least one special character.");
      return false;
    }
    setError("password", "");
    return true;
  }

  function validateConfirmPassword() {
    const value = fields.confirmPassword.value;
    if (!value) {
      setError("confirmPassword", "Please confirm your password.");
      return false;
    }
    if (value !== fields.password.value) {
      setError("confirmPassword", "Passwords do not match.");
      return false;
    }
    setError("confirmPassword", "");
    return true;
  }

  function validateEmail() {
    const value = fields.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setError("email", "Email is required.");
      return false;
    }
    if (!emailPattern.test(value)) {
      setError("email", "Please enter a valid email address.");
      return false;
    }
    setError("email", "");
    return true;
  }

  function validateOptionalLength(fieldName, maxLength, label) {
    const value = fields[fieldName].value.trim();
    if (value.length > maxLength) {
      setError(fieldName, label + " must be at most " + maxLength + " characters.");
      return false;
    }
    setError(fieldName, "");
    return true;
  }

  function validatePostcode() {
    const value = fields.postcode.value.trim();
    const postcodePattern = /^\d{4}$/;
    if (!value) {
      setError("postcode", "Postcode is required.");
      return false;
    }
    if (!postcodePattern.test(value)) {
      setError("postcode", "Postcode must be exactly 4 digits.");
      return false;
    }
    setError("postcode", "");
    return true;
  }

  function validateMobile() {
    const value = fields.mobile.value.trim();
    const mobilePattern = /^04\d{8}$/;
    if (!value) {
      setError("mobile", "Mobile number is required.");
      return false;
    }
    if (!mobilePattern.test(value)) {
      setError("mobile", "Mobile number must be exactly 10 digits and start with 04.");
      return false;
    }
    setError("mobile", "");
    return true;
  }

  function validateDob() {
    const value = fields.dob.value;
    if (!value) {
      setError("dob", "Date of Birth is required.");
      return false;
    }

    const dobDate = new Date(value + "T00:00:00");
    if (Number.isNaN(dobDate.getTime())) {
      setError("dob", "Please enter a valid date.");
      return false;
    }

    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dobDate.getDate())
    ) {
      age -= 1;
    }

    if (age < 16) {
      setError("dob", "Applicant must be at least 16 years old.");
      return false;
    }

    setError("dob", "");
    return true;
  }

  function validateJobCategory() {
    const value = fields.jobCategory.value;
    if (!value) {
      setError("jobCategory", "Please select a preferred job category.");
      return false;
    }
    setError("jobCategory", "");
    return true;
  }

  function validateAllFields() {
    const checks = [
      validateName(fields.firstName.value, "firstName", "First Name"),
      validateName(fields.lastName.value, "lastName", "Last Name"),
      validateUsername(),
      validatePassword(),
      validateConfirmPassword(),
      validateEmail(),
      validateOptionalLength("streetAddress", 40, "Street Address"),
      validateOptionalLength("suburb", 20, "Suburb"),
      validatePostcode(),
      validateMobile(),
      validateDob(),
      validateJobCategory()
    ];

    return checks.every(function (result) {
      return result;
    });
  }

  function openTermsModal() {
    termsModalOverlay.classList.add("active");
    termsModalOverlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeTermsModal() {
    termsModalOverlay.classList.remove("active");
    termsModalOverlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  toggleTermsButton.addEventListener("click", openTermsModal);
  closeTermsModalButton.addEventListener("click", closeTermsModal);

  termsModalOverlay.addEventListener("click", function (event) {
    if (event.target === termsModalOverlay) {
      closeTermsModal();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && termsModalOverlay.classList.contains("active")) {
      closeTermsModal();
    }
  });

  form.addEventListener("submit", function (event) {
    summaryError.textContent = "";
    if (!validateAllFields()) {
      event.preventDefault();
      summaryError.textContent = "Please fix the validation errors before submitting the form.";
    }
  });

  fields.firstName.addEventListener("input", function () {
    validateName(fields.firstName.value, "firstName", "First Name");
  });
  fields.lastName.addEventListener("input", function () {
    validateName(fields.lastName.value, "lastName", "Last Name");
  });
  fields.username.addEventListener("input", validateUsername);
  fields.password.addEventListener("input", function () {
    validatePassword();
    validateConfirmPassword();
  });
  fields.confirmPassword.addEventListener("input", validateConfirmPassword);
  fields.email.addEventListener("input", validateEmail);
  fields.streetAddress.addEventListener("input", function () {
    validateOptionalLength("streetAddress", 40, "Street Address");
  });
  fields.suburb.addEventListener("input", function () {
    validateOptionalLength("suburb", 20, "Suburb");
  });
  fields.postcode.addEventListener("input", validatePostcode);
  fields.mobile.addEventListener("input", validateMobile);
  fields.dob.addEventListener("change", validateDob);
  fields.jobCategory.addEventListener("change", validateJobCategory);
}());
