document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const userProfile = document.getElementById('user-profile');
    const loginValidation = document.getElementById('login-validation');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const logoutButton = document.getElementById('logout-button');

    function showProfile(user) {
    document.getElementById('user-role').textContent = user.ruolo;
    document.getElementById('user-email').textContent = user.email;
    document.getElementById('user-fortnite').textContent = user.nome_fortnite;
    document.getElementById('user-discord').textContent = user.nome_discord;
    
    // Mostra le nuove informazioni
    document.getElementById('user-join-date').textContent = user.data_ingresso;
    document.getElementById('user-earnings').textContent = user.earnings;
    document.getElementById('user-status').textContent = user.stato_account;

    // Mostra le nuove informazioni
    document.getElementById('user-platform').textContent = user.piattaforma;
    document.getElementById('user-peripherals').textContent = user.periferica;
    document.getElementById('user-notes').textContent = user.note_personali;

    // Gestione dei premi
    const awardsList = document.getElementById('user-awards');
    awardsList.innerHTML = ''; // Pulisce la lista prima di riempirla
    user.premi.forEach(award => {
        const listItem = document.createElement('li');
        listItem.textContent = `${award.torneo}: ${award.posizione}`;
        awardsList.appendChild(listItem);
    });

    const downloadButton = document.getElementById('download-button');
    downloadButton.href = user.immagine_scaricabile;
    downloadButton.download = user.immagine_scaricabile.split('/').pop();

    loginForm.classList.add('hidden');
    userProfile.classList.remove('hidden');
}

    function showLoginForm() {
        loginForm.classList.remove('hidden');
        userProfile.classList.add('hidden');
        emailInput.value = '';
        passwordInput.value = '';
        errorMessage.textContent = '';
    }

    loginValidation.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // Modifica qui: cambia il percorso del file JSON
        fetch('/profiles/Accounts/users.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Errore nel caricamento dei dati utente.');
                }
                return response.json();
            })
            .then(users => {
                const user = users.find(u => u.email === email && u.password === password);

                if (user) {
                    showProfile(user);
                } else {
                    errorMessage.textContent = 'Email o password non validi.';
                }
            })
            .catch(error => {
                errorMessage.textContent = 'Si è verificato un errore.';
                console.error('Errore:', error);
            });
    });

    logoutButton.addEventListener('click', showLoginForm);
});