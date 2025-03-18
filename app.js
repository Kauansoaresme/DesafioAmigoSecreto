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
  
function sortearAmigo() {
    if (amigos.length === 0) {
      document.getElementById('resultado').innerHTML = '<li>Adicione amigos para sortear.</li>'; 
      return;
    }
  
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
  
      document.getElementById('resultado').innerHTML = `<li>O amigo sorteado foi: ${amigoSorteado}</li>`; 
      
      amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
  }