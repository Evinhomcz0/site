document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('emailLogin').value;
    const senha = document.getElementById('senhaLogin').value;

 
    if (senha === "suasenha" && email === "seuemail@example.com") {
        alert('Login bem-sucedido!');
        window.location.href = 'cadastro.html';
    } else {
        alert('Email ou senha incorretos.');
    }
});