document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-validate');
    const numberA = document.getElementById('first-number');
    const numberB = document.getElementById('second-number');
    const errorDiv = document.querySelector('.error');
    const resultDiv = document.querySelector('.final-result');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio do formulário

        // Converte os valores de entrada para números
        const valueA = Number(numberA.value);
        const valueB = Number(numberB.value);

        // Limpa as mensagens anteriores
        errorDiv.style.display = 'none';
        resultDiv.style.display = 'none';

        if (valueB <= valueA) {
            // Se B não for maior que A, mostra a mensagem de erro
            errorDiv.textContent = 'Erro: B deve ser maior que A e não podem ser iguais.';
            errorDiv.style.display = 'block';
            errorDiv.style.color = 'red'; // Cor do texto de erro
        } else {
            // Se o formulário estiver correto, processa e mostra uma mensagem de sucesso
            resultDiv.textContent = 'Sucesso: A validação está correta!';
            resultDiv.style.display = 'block';
            resultDiv.style.color = 'green'; // Cor do texto de sucesso
        }
    });
});
