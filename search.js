function search() {
  var input = document.getElementById("input").value;
  var pattern = input.toLowerCase();
  var targetId = "";
  var firstPara;
  var findPattern = false;

  var divs = document.getElementsByClassName("col-md-2");
  for (var i = 0; i < divs.length; i++) {
    var para = divs[i].getElementsByTagName("p");
    var index = para[0].innerText.toLowerCase().indexOf(pattern);

    if (index != -1) {
      if (findPattern == false) {
        targetId = divs[i].parentNode.id;
        firstPara = para[0];
        findPattern = true;
      }

      let regExp = new RegExp(pattern, "gi");
      para[0].innerHTML = para[0].textContent.replace(
        regExp,
        "<mark>$&</mark>"
      );
    }
  }
  if (firstPara != undefined) {
    var element = document.getElementById(targetId);
    element.scrollIntoView();
    element.style.marginTop = "85px";
  }
}

// get data

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const succses = document.querySelector("#succses");
const errorNodes = document.querySelectorAll(".error");

// Validate data
function validateForm() {
  clearMessages();
  let errorFlag = false;

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
    nameInput.classList.add("error-border");
    errorFlag = true;
  }
  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
    email.classList.add("error-border");
    errorFlag = true;
  }
  if (message.value.length < 1) {
    errorNodes[2].innerText = "Please enter message";
    message.classList.add("error-border");
    errorFlag = true;
  }
  if (!errorFlag) {
    success.innerText = "Success!";
  }
}

// clear error / success message
function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
  nameInput.classList.remove("error-border");
  email.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
