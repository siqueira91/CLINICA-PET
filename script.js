document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const petList = document.getElementById('pet-list');
            data.pets.forEach(pet => {
                const petCard = document.createElement('div');
                petCard.classList.add('pet-card');
                petCard.innerHTML = `
                    <h3>${pet.name}</h3>
                    <p>${pet.type}</p>
                    <p>${pet.age} anos</p>
                `;
                petList.appendChild(petCard);
            });
        });

    document.getElementById('agendamento-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = e.target.nome.value;
        const pet = e.target.pet.value;
        const data = e.target.data.value;
        const horario = e.target.horario.value;
        
        fetch('/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, pet, data, horario })
        })
        .then(response => response.text())
        .then(message => alert(message))
        .catch(err => alert('Erro ao agendar consulta'));
    });

    document.getElementById('contato-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = e.target['nome-contato'].value;
        const email = e.target.email.value;
        const mensagem = e.target.mensagem.value;
        
        fetch('/contacts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, email, mensagem })
        })
        .then(response => response.text())
        .then(message => alert(message))
        .catch(err => alert('Erro ao enviar contato'));
    });
});
