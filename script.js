function calcular() {
    let $peso = document.querySelector("#peso").value;
    let $altura = document.querySelector("#altura").value;
    let $resultado = document.querySelector(".resultado");
    let imc = ($peso / ($altura * $altura)).toFixed(1);
    let faixa
    console.log();

    if (imc <= 16.9) {
        faixa = `Muito abaixo do peso`;
    } else if (imc <= 18.4) {
        faixa = `Abaixo do peso`;
    } else if (imc <= 24.9) {
        faixa = `Peso normal`;
    } else if (imc <= 29.9) {
        faixa = `Acima do peso`;
    } else if (imc <= 34.9) {
        faixa = `Obesidade grau I`;
    } else if (imc <= 40) {
        faixa = `Obesidade grau II`;
    } else {
        faixa = `Obesidade grau III`;
    }

    $resultado.classList.add("exibir");

    console.log(`${imc} \n ${faixa}`);

    $resultado.innerHTML = `
                <div class="tabela">
                    <p  class="tabela__titulo">Peso </p>
                    <p>${$peso}kg</p>
                </div>
                <div class="tabela">
                    <p  class="tabela__titulo">Altura </p>
                    <p>${$altura}m</p>
                </div>
                <div class="tabela">
                    <p  class="tabela__titulo">IMC </p>
                    <p>${imc}</p>
                </div>
                <div>
                    <p  class="tabela__titulo">Classificação </p>
                    <p>${faixa}</p>
                </div>`;
}