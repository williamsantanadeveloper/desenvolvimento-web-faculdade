const informar_data = () => {
    let dia = document.getElementById("dia").value;
    let ano = document.getElementById("ano").value;
    let mes = document.getElementById("mes").value;

    let result = document.getElementById("result");

    if (mes == 1 && dia <= 31) {
        result.textContent = dia + ' de janeiro de ' + ano
    }
    else if (mes == 2 && dia <= 28) {
        result.textContent = dia + ' de fevereiro de ' + ano
    }
    else if (mes == 3 && dia <= 31) {
        result.textContent = dia + ' de março de ' + ano
    }
    else if (mes == 4 && dia <= 30) {
        result.textContent = dia + ' de abril de ' + ano
    }
    else if (mes == 5 && dia <= 31) {
        result.textContent = dia + ' de maio de ' + ano
    }
    else if (mes == 6 && dia <= 30) {
        result.textContent = dia + ' de junho de ' + ano
    }
    else if (mes == 7 && dia <= 31) {
        result.textContent = dia + ' de julho de ' + ano
    }
    else if (mes == 8 && dia <= 31) {
        result.textContent = dia + ' de agosto de ' + ano
    }
    else if (mes == 9 && dia <= 30) {
        result.textContent = dia + ' de setembro de ' + ano
    }
    else if (mes == 10 && dia <= 31) {
        result.textContent = dia + ' de outubro de ' + ano
    }
    else if (mes == 11 && dia <= 30) {
        result.textContent = dia + ' de novembro de ' + ano
    }
    else if (mes == 12 && dia <= 31) {
        result.textContent = dia + ' de dezembro de ' + ano
    }
    else {
        result.textContent = 'Informe uma data válida'
    }
};

