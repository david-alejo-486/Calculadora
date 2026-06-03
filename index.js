function suma() {
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;
    document.getElementById('resultado').innerHTML = "El resultado de la suma es: " + (parseInt(valorx) + parseInt(valory));
}

function resta() {
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;
    document.getElementById('resultado').innerHTML = "El resultado de la resta es: " + (parseInt(valorx) - parseInt(valory));
}

function multiplicacion() {
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;
    document.getElementById('resultado').innerHTML = "El resultado de la multiplicacion es: " + (parseInt(valorx) * parseInt(valory));
}

function division() {
    var valorx = document.getElementById('valor1').value;
    var valory = document.getElementById('valor2').value;
    
    if (parseInt(valory) === 0) {
        document.getElementById('resultado').innerHTML = "No se puede dividir por cero";
    } else {
        document.getElementById('resultado').innerHTML = "El resultado de la division es: " + (parseInt(valorx) / parseInt(valory));
    }
}