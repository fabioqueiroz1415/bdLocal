async function adicionarPessoa() {
    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;

    // Carregar o conteúdo do arquivo JSON
    const response = await fetch('data.json');
    let data = await response.json();

    // Adicionar a nova pessoa ao JSON
    if (!data.pessoas) {
        data.pessoas = []; // Se não houver nenhuma pessoa ainda, inicializa o array
    }
    data.pessoas.push({ nome, idade });

    // Enviar as alterações de volta para o arquivo JSON
    await fetch('data.json', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    alert('Pessoa adicionada com sucesso!');
    alert(nome);
    alert(idade);
}

async function verPessoas() {
    // Carregar o conteúdo do arquivo JSON
    const response = await fetch('data.json');
    const data = await response.json();

    // Criar a tabela com os nomes e idades das pessoas
    let tabelaHTML = '<h2>Pessoas</h2>';
    tabelaHTML += '<table border="1">';
    tabelaHTML += '<tr><th>Nome</th><th>Idade</th></tr>';
    if (data.pessoas) {
        data.pessoas.forEach(pessoa => {
            tabelaHTML += `<tr><td>${pessoa.nome}</td><td>${pessoa.idade}</td></tr>`;
        });
    }
    tabelaHTML += '</table>';

    // Exibir a tabela na página
    document.getElementById('tabelaPessoas').innerHTML = tabelaHTML;
}
