// Preço por quilo do açaí
const precoPorKg = 59.90;

// Seleciona elementos da página
const form = document.getElementById('form-calculo');
const pesoInput = document.getElementById('peso');
const resultado = document.getElementById('resultado');

// Adiciona evento para cálculo
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtém o peso em gramas e calcula o preço
    const pesoGramas = parseFloat(pesoInput.value);
    if (isNaN(pesoGramas) || pesoGramas <= 0) {
        resultado.textContent = 'Por favor, insira um peso válido.';
        return;
    }

    const pesoKg = pesoGramas / 1000; // Converte gramas para quilos
    const precoFinal = pesoKg * precoPorKg;

    // Exibe o resultado
    resultado.textContent = `O preço do açaí é R$ ${precoFinal.toFixed(2).replace('.', ',')}`;
});
