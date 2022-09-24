const outputArea = document.getElementById("output-area");
let contactForm = document.getElementById("contactForm");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

let filledForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

let {
  nameValidated,
  emailValidated,
  subjectValidated,
  messageValidated,
} = false;

const validateInputs = () => {
  filledForm.name = name.value;
  filledForm.email = email.value;
  filledForm.subject = subject.value;
  filledForm.message = message.value;

  // Check Values being validated
  if (validator.isLength(filledForm.name, { min: 1, max: 75 })) {
    nameValidated = true;
    name.classList.add("is-valid")
    name.classList.remove("is-invalid")
  } else {
    name.classList.add("is-invalid")
    name.classList.remove("is-valid")
  }
  if (validator.isEmail(filledForm.email)) {
    emailValidated = true;
    email.classList.add("is-valid")
    email.classList.remove("is-invalid")
  } else {
    email.classList.add("is-invalid")
    email.classList.remove("is-valid")
  }
  if (validator.isLength(filledForm.subject, { min: 0, max: 250 })) {
    subjectValidated = true;
    subject.classList.add("is-valid")
    subject.classList.remove("is-invalid")
  } else {
    subject.classList.add("is-invalid")
    subject.classList.remove("is-valid")
  }
  if (validator.isLength(filledForm.message, { min: 1, max: 1000 })) {
    messageValidated = true;
    message.classList.add("is-valid")
    message.classList.remove("is-invalid")
  } else {
    message.classList.add("is-invalid")
    message.classList.remove("is-valid")
  }

  if (nameValidated && emailValidated && subjectValidated && messageValidated) {
    // Reset Validation values
    nameValidated = false;
    emailValidated = false;
    subjectValidated = false;
    messageValidated = false;
    outputArea.classList.remove("text-danger")
    outputArea.classList.add("text-success")
    contactForm.classList.add("was-validated")
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
      })
      .then(function (response) {
        console.log(response.data.message);
        outputArea.innerText = response.data.message;
      })
      .catch(function (error) {
        console.log(error);
      });
  } else {
    outputArea.innerText = "Please enter valid values in all required fields"
    outputArea.classList.add("text-danger")
  }
};
