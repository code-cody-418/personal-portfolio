const payInput = document.getElementById("pay");
const distanceToDropoffInput = document.getElementById("distanceToDropoff");
const timeToDropoffInput = document.getElementById("timeToDropoff");
const resetButton = document.getElementById("reset");
const submitButton = document.getElementById("submit");
const resultText = document.getElementById("result");
const milesBtn = document.getElementById("milesBtn");
const minutesBtn = document.getElementById("minutesBtn");

window.onload = () => {
  payInput.focus();
};

resetButton.addEventListener("click", () => {
  payInput.value = "";
  distanceToDropoffInput.value = "";
  timeToDropoffInput.value = "";
  resultText.innerText = "";

  payInput.focus();
});

milesBtn.addEventListener("click", () => {
  distanceToDropoffInput.focus();
});

minutesBtn.addEventListener("click", () => {
  timeToDropoffInput.focus();
});

payInput.addEventListener("input", () => {
  distanceToDropoffInput.focus();
});

distanceToDropoffInput.addEventListener("input", () => {
  timeToDropoffInput.focus();
});

payInput.addEventListener("input", () => {
  resultText.innerText = checkGoodOrder();
});

distanceToDropoffInput.addEventListener("input", () => {
  resultText.innerText = checkGoodOrder();
});

timeToDropoffInput.addEventListener("input", () => {
  resultText.innerText = checkGoodOrder();
});

const checkNan = (value) => {
  if (value === 0 || isNaN(parseFloat(value))) {
    return true;
  }
};

const checkGoodOrder = () => {
  let totalPay;
  let distanceToDropoff;
  let timeToDropoff;

  totalPay = Number(payInput.value);
  distanceToDropoff = Number(distanceToDropoffInput.value);
  timeToDropoff = Number(timeToDropoffInput.value);

  if (checkNan(totalPay) && checkNan(distanceToDropoff)) {
    resultText.innerText = "Error: Not number or Empty";
  }

  const totalDistance = distanceToDropoff * 2; // This is the distance it takes to dropOff the order then return to base
  const minPayPerMile = 1.75; // set this for what I would like to be paid per mile

  const maxMiles = totalPay / minPayPerMile; // The total maximum miles I am willing to travel per order.

  if (totalPay <= 6) {
    return "Bad";
  }

  let timeDetermination;
  // determine time
  if (timeToDropoff === 0) {
    timeDetermination = "Default";
  } else if (timeToDropoff <= totalPay * 1.5) {
    timeDetermination = "Good";
  } else if (timeToDropoff <= totalPay * 1.75) {
    timeDetermination = "Ok";
  } else {
    timeDetermination = "Bad";
  }

  if (
    totalDistance < maxMiles &&
    (timeDetermination === "Good" || timeDetermination === "Default")
  ) {
    return "Good";
  } else if (
    distanceToDropoff < maxMiles &&
    (timeDetermination === "Good" ||
      timeDetermination === "Ok" ||
      timeDetermination === "Default")
  ) {
    return "Ok";
  } else {
    return "Bad";
  }
};
