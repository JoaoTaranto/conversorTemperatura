var campoResultadoConversao = document.getElementById('resultadoConversao')

function Converter() {
    var valorCelsius = document.getElementById('temperatura-inserida').value;
    var valorFahrenheit = valorCelsius * 32;
    var valorKelvin = valorCelsius * 273.15;

    var listaTemperaturas = document.getElementById('menu-Unidades')
    var unidade = listaTemperaturas.options[listaTemperaturas.selectedIndex].value;

    if (unidade == "nan") {
        campoResultadoConversao.innerHTML = "Olá, selecione uma temperatura para continuar!"
    } else if (unidade == "fahrenheit") {
        campoResultadoConversao.innerHTML = "Olá, o resultado de sua conversão foi de " + valorFahrenheit + "°F"
    } else if (unidade == "kelvin") {
        campoResultadoConversao.innerHTML = "Olá, o resultado de sua conversão foi de " + valorKelvin + "°K"
    }
}