// Form Validation 

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var checkName = /^[a-zA-Z\s]*$/;
  var mailFormat = /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]+\.[A-Za-z]{2,4}$/;

  if (!name.match(checkName)) {
    alert("Please Enter a valid Name");
    return false;
  }

  if (!email.match(mailFormat)) {
    alert("Invalid email address");
    return false;
  }

  return true; // Form is valid, allow submission
}