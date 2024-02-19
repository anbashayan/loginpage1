function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

   
    $.post("login.php", { username: username, password: password }, function(data) {
        if (data === "success") {
            alert("Login successful");
           
        } else {
            alert("Login failed. Please check your credentials.");
        }
    });

    return false; 
}
