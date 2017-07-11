

function checkEmail() {

    var email = document.getElementById('email').value;
    var msg = document.getElementById("msg");

    var temArr = false;
    var temEsp = false;

    for(var i = 0; i < email.length; i++) {
        if(email.charAt(i) === '@') {
            temArr = true;
        } else if(email.charAt(i) === ' ') {
            temEsp = true;
        }
    }

    console.log(temArr, temEsp);
    if(!temArr || temEsp) {
        msg.innerHTML = "Email inválido!";
    } else {
        msg.innerHTML = "";
    }
}