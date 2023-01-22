const outputArea = document.getElementById("output-area");
let contactForm = document.getElementById("contactForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let googleRecaptcha = document.getElementById("g-recaptcha-output-area")

//onloadCallback sets up google recaptcha and captchaToken prepares the token after user is verified https://developers.google.com/recaptcha/docs/display 
var onloadCallback = function () {
  grecaptcha.render("g-recaptcha", {
    'sitekey': '6LeVCBokAAAAAHkn6skYhkxRtuGYAp1ZP9wavZ8f',
    'callback' : captchaToken
  });
};
let googleCaptchaToken = ""
var captchaToken = (token) => {
  googleCaptchaToken = token
}

let filledForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
  recaptcha: "",
};

let {
  nameValidated,
  emailValidated,
  subjectValidated,
  messageValidated,
  recaptchaValidated
} = false;

const validateInputs = () => {
  filledForm.name = name.value;
  filledForm.email = email.value;
  filledForm.subject = subject.value;
  filledForm.message = message.value;
  filledForm.recaptcha = googleCaptchaToken

  // Check Values being validated
  if (validator.isLength(filledForm.name, { min: 1, max: 75 })) {
    nameValidated = true;
    name.classList.add("is-valid");
    name.classList.remove("is-invalid");
  } else {
    name.classList.add("is-invalid");
    name.classList.remove("is-valid");
  }
  if (validator.isEmail(filledForm.email)) {
    emailValidated = true;
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
  } else {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
  }
  if (validator.isLength(filledForm.subject, { min: 0, max: 250 })) {
    subjectValidated = true;
    subject.classList.add("is-valid");
    subject.classList.remove("is-invalid");
  } else {
    subject.classList.add("is-invalid");
    subject.classList.remove("is-valid");
  }
  if (validator.isLength(filledForm.message, { min: 1, max: 1000 })) {
    messageValidated = true;
    message.classList.add("is-valid");
    message.classList.remove("is-invalid");
  } else {
    message.classList.add("is-invalid");
    message.classList.remove("is-valid");
  }
  if (validator.isLength(filledForm.recaptcha, { min: 1, max: 1000 })) {
    recaptchaValidated = true;
    googleRecaptcha.innerText = ""
  } else {
    googleRecaptcha.innerText = "Please Check reCAPTCHA Below"
  }

  if (nameValidated && emailValidated && subjectValidated && messageValidated && recaptchaValidated) {
    // Reset Validation values
    nameValidated = false;
    emailValidated = false;
    subjectValidated = false;
    messageValidated = false;
    recaptchaValidated = false
    outputArea.classList.remove("text-danger");
    outputArea.classList.add("text-success");
    contactForm.classList.add("was-validated");
    return true;
  } else {
    return false;
  }
};

const submitForm = () => {
  if (validateInputs()) {
    axios
      .post("./apis/", {
        name: filledForm.name,
        email: filledForm.email,
        subject: filledForm.subject,
        message: filledForm.message,
        recaptcha: filledForm.recaptcha
      })
      .then(function (response) {
        console.log(response.data.message);
        outputArea.innerText = response.data.message;
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    outputArea.innerText = "Please enter valid values in all required fields";
    outputArea.classList.add("text-danger");
  }
};
