const btnListar = document.getElementById('BtnGet')
const btnCadastrar = document.getElementById('btn-cdastrar')
const btnAtualizar = document.getElementById('btn-atualizar')
const btnApagar = document.getElementById('btn-apagar')

btnListar.addEventListener('click', async ()=> {
    const resposta = await fetch('http://localhost:3000/alunos');
    dados = await resposta.json();
    document.getElementById('lista').textContent - JSON.stringify(dados, null, 2);
})

btnCadastrar.addEventListener('click', async () =>{
    const resposta = await fetch('http://localhost:3000/alunos', {
        method: 'POST', 
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({
            nome: document.getElementById('cad-nome').value,
            email: document.getElementById('cad-email').value,
            senha: document.getElementById('cad-senha').value
        })
    });

    const dados = await resposta.json();
    console.log(dados)
})