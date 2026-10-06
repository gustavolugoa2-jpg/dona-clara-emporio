document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const cliente = document.getElementById('cliente').value;
    const produto = document.getElementById('produto').value;
    const data = new Date(document.getElementById('data').value).toLocaleString('pt-BR');
    const obs = document.getElementById('obs').value || 'Nenhuma';

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <strong>Pedido Registrado com Sucesso! 🎉</strong><br><br>
        <strong>Cliente:</strong> ${cliente}<br>
        <strong>Item:</strong> ${produto}<br>
        <strong>Retirada Agendada:</strong> ${data}<br>
        <strong>Observações:</strong> ${obs}<br><br>
        <em>Status: Confirmado e enviado para a cozinha de Dona Clara!</em>
    `;
});