function calcular() {
  let crimes = Array.from(document.getElementById('crimes').selectedOptions).map(option => option.value);
  let atenuantes = document.getElementById('atenuantes').value;
  let agravantes = document.getElementById('agravantes').value;

  let pena = 0;

  // Cálculo básico de pena
  if (crimes.includes('homicidio')) {
    pena += 30; // Homicídio Doloso
  }
  if (crimes.includes('cruelty')) {
    pena += 5; // Crueldade Animal
  }
  if (crimes.includes('fuga')) {
    pena += 10; // Fuga de Pessoa Presa
  }
  if (crimes.includes('ameaça')) {
    pena += 5; // Ameaçar Alguém
  }
  if (crimes.includes('ameaça contra oficial ')) {
    pena += 5; // Ameaçar Alguém
  }
  if (crimes.includes('ameaça contra autoridade')) {
    pena += 5; // Ameaçar Alguém
  }
  if (crimes.includes('homicidio contra autoridade')) {
    pena += 5; // Ameaçar Alguém
  }
  if (crimes.includes('')) {
    pena += 5; // Ameaçar Alguém
  }

  // Aplicando atenuantes
  if (atenuantes === 'reup') {
    pena -= pena * 0.1; // Redução de 10%
  }

  // Aplicando agravantes
  if (agravantes === 'mau-comportamento') {
    pena += pena * 0.2; // Aumento de 20%
  }

  // Atualizando o resultado
  document.getElementById('pena-total').textContent = Math.round(pena);
}

function copiarRelatorio() {
  const relatorio = `
📋 **RELATÓRIO DE PRISÃO - CAVALARIA ATLANTA**

🪖 **MILITAR QUE PRENDEU:**
Nome: Não informado
👤 **DADOS DO PRESO**
Nome: Não informado
RG: Não informado

⚖️ **CRIMES COMETIDOS**
• Homicídio Doloso
• Crueldade Animal
• Fuga de Pessoa Presa

📌 **OBSERVAÇÕES**
🔫 Possui porte de arma

✅ **ATENUANTES**
• Réu primário: Redução de 10%

❌ **AGRAVANTES**
• Mau comportamento: Aumento de 20%

═══════════════════
⏱️ **PENA TOTAL:** ${document.getElementById('pena-total').textContent} meses
═══════════════════`;

  navigator.clipboard.writeText(relatorio).then(() => {
    alert("Relatório copiado para a área de transferência!");
  });
}
