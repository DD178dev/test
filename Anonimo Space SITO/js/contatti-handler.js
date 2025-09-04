document.querySelector('.form-contatto').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;

  const data = {
    nome: form.nome.value,
    email: form.email.value,
    messaggio: form.messaggio.value
  };

  try {
    const res = await fetch('/contatto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const msg = await res.text();

    // ✅ Mostra messaggio di successo
    alert(msg);

    // 🧹 Svuota il modulo
    form.reset();
  } catch (err) {
    alert('❌ Errore nell’invio del messaggio.');
    console.error(err);
  }
});