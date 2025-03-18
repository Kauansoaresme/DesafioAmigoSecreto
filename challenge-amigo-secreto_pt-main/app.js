let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = document.getElementById('amigo').value.trim();
  
    if (nomeAmigo !== '') {
      amigos.push(nomeAmigo);
      const li = document.createElement('li');
      li.textContent = nomeAmigo;
      document.getElementById('listaAmigos').appendChild(li); 
      document.getElementById('amigo').value = '';
    } else {
      alert("Por favor, insira um nome válido!");
    }
  }