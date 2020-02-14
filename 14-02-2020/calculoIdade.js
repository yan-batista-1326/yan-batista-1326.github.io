function disparar_prompt() {
    var x = window.prompt("Digite seu ano de nascimento");
    calcularIdade(x);
}

function calcularIdade(birthday) {
    var dob_timestamp = new Date(birthday).getTime();
    var age = ((new Date()).getTime() - dob_timestamp) / (31556926000);
    document.getElementById("resultado").innerHTML = (age.toFixed(1)) + " Anos";
}