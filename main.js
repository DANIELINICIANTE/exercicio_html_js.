document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-validate');
    const numberA = document.getElementById('first-number');
    const numberB = document.getElementById('second-number');
    const errorDiv = document.querySelector('.error');
    const resultDiv = document.querySelector('.final-result');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); 

        
        const valueA = Number(numberA.value);
        const valueB = Number(numberB.value);

        
        errorDiv.style.display = 'none';
        resultDiv.style.display = 'none';

        if (valueB <= valueA) {
            
            errorDiv.textContent = 'Erro: B deve ser maior que A e não podem ser iguais.';
            errorDiv.style.display = 'block';
            errorDiv.style.color = 'red'; 
        } else {
            
            resultDiv.textContent = 'Sucesso: A validação está correta!';
            resultDiv.style.display = 'block';
            resultDiv.style.color = 'green'; 
        }
    });
});
