let penaTotal = 0;

function updateCrimePreview() {
    const selectedCrimes = [...document.querySelectorAll('.select-crime:checked')]
        .map(input => input.value)
        .join('\n• ');
    document.getElementById('selectedCrimesPreview').innerText = selectedCrimes || 'Nenhum crime selecionado';
}

document.querySelectorAll('.select-crime').forEach(crime => {
    crime.addEventListener('change', () => {
        const selected = [...document.querySelectorAll('.select-crime:checked')];
        penaTotal = selected.reduce((t, c) => t + (parseInt(c.dataset.penalty) || 0), 0);
        document.getElementById('penaTotalPreview').innerText = penaTotal;
        updateCrimePreview();
    });
});

function updateItensApreendidos() {
    const val = document.getElementById('itensApreendidos').value;
    document.getElementById('itensApreendidosPreview').innerText = val || 'Não informado';
}

function updateDinheiroSuj() {
    const val = document.getElementById('dinheiroSuj').value;
    document.getElementById('dinheiroSujPreview').innerText = val || 'R$ 0,00';
}

function clearForm() {
    document.querySelectorAll('input[type="text"]').forEach(e => e.value = '');
    document.querySelectorAll('textarea').forEach(e => e.value = '');
    document.querySelectorAll('.select-crime').forEach(e => e.checked = false);
    penaTotal = 0;
    document.getElementById('penaTotalPreview').innerText = '0';
    document.getElementById('selectedCrimesPreview').innerText = 'Nenhum crime selecionado';
}

function copyReport() {
    const militar = document.getElementById('militar').value || 'Não informado';
    const preso = document.getElementById('preso').value || 'Não informado';
    const rg = document.getElementById('rgPreso').value || 'Não informado';
    const crimes = [...document.querySelectorAll('.select-crime:checked')]
        .map(c => '• ' + c.value).join('\n') || 'Nenhum crime selecionado';
    const pena = document.getElementById('penaTotalPreview').innerText || '0';
    const itens = document.getElementById('itensApreendidos').value || 'Não informado';

    const report = `📋 **RELATÓRIO DE PRISÃO - CAVALARIA ATLANTA**

🪖 **MILITAR QUE PRENDEU:**
Nome: ${militar}

👤 **DADOS DO PRESO**
Nome: ${preso}
RG: ${rg}

⚖️ **CRIMES COMETIDOS**
${crimes}

📌 **OBSERVAÇÕES**
${itens}

═══════════════════
⏱️ **PENA TOTAL:** ${pena} meses
═══════════════════`;

    navigator.clipboard.writeText(report).then(() => {
        alert('Relatório copiado com sucesso!');
    });
}
