document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    //Validate dữ liệu vào các ô input
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let pw = document.getElementById("pw").value;

    if (firstname === "") {
        document.getElementById("firstname-error").innerHTML = "First Name cannot be empty";
        document.getElementById("firstname").style.borderColor = "#FF7A7A";
        document.getElementById("error-icon-fname").style.display = "inline-block";
    }
    else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("error-icon-fname").style.display = "none";
    }
    if (lastname === "") {
        document.getElementById("lastname-error").innerHTML = "Last Name cannot be empty";
        document.getElementById("lastname").style.borderColor = "#FF7A7A";
        document.getElementById("error-icon-lname").style.display = "inline-block";
    }
    else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("error-icon-lname").style.display = "none";
    }

    
    if (pw === "") {
        document.getElementById("password-error").innerHTML = "Password cannot be empty";
        document.getElementById("pw").style.borderColor = "#FF7A7A";
        document.getElementById("error-icon-pw").style.display = "inline-block";
    }
    else {
        document.getElementById("error").innerHTML = "";
        document.getElementById("error-icon-pw").style.display = "none";
    };
    
      if (email === "" || !emailRegex.test(email)) {
        document.getElementById("email").style.borderColor = "#FF7A7A";
        document.getElementById("email-error").textContent = "Looks like this is not an email.";
        document.getElementById("email").classList.add("error");
        document.getElementById("error-icon-mail").style.display = "inline-block";
        } else {
        document.getElementById("email").classList.remove("error");
        document.getElementById("error-icon-img").style.display = "none";
        document.getElementById("email").style.borderColor = '#B9B6D3';
        }

});