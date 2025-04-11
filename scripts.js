/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = "http://127.0.0.1:5000/matriculas";
  fetch(url, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      data.matriculas.forEach((item) =>
        insertList(item.nome, item.idade, item.serie)
      );
    })
    .catch((error) => {
      console.error("Erro:", error);
    });
};

/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList();

/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputNome, inputIdade, inputSerie) => {
  const formData = new FormData();
  formData.append("nome", inputNome);
  formData.append("idade", inputIdade);
  formData.append("serie", inputSerie);

  let url = "http://127.0.0.1:5000/matricula";
  fetch(url, {
    method: "post",
    body: formData,
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Erro:", error);
    });
};

/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
};

/*
  --------------------------------------------------------------------------------------
  Função para remover um item da lista ao clicar no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let row = this.parentElement.parentElement;
      const nomeItem = row.getElementsByTagName("td")[0].innerHTML;
      if (confirm("Você tem certeza?")) {
        row.remove();
        deleteItem(nomeItem);
        alert("Matrícula removida!");
      }
    };
  }
};

/*
  --------------------------------------------------------------------------------------
  Função para deletar um item da lista do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (nome) => {
  console.log("Removendo:", nome);
  let url = "http://127.0.0.1:5000/matricula?nome=" + encodeURIComponent(nome);
  fetch(url, {
    method: "delete",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Erro:", error);
    });
};

/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo item com Nome, Idade e Série
  --------------------------------------------------------------------------------------
*/
const newItem = () => {
  let inputNome = document.getElementById("newInput").value;
  let inputIdade = document.getElementById("newQuantity").value;
  let inputSerie = document.getElementById("newPrice").value;

  if (inputNome === "") {
    alert("Digite o nome completo!");
  } else if (isNaN(inputIdade)) {
    alert("A idade precisa ser um número!");
  } else {
    insertList(inputNome, inputIdade, inputSerie);
    postItem(inputNome, inputIdade, inputSerie);
    alert("Matrícula adicionada!");
  }
};

/*
  --------------------------------------------------------------------------------------
  Função para inserir itens na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (nome, idade, serie) => {
  var item = [nome, idade, serie];
  var table = document.getElementById("myTable");
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cel = row.insertCell(i);
    cel.textContent = item[i];
  }
  insertButton(row.insertCell(-1));
  document.getElementById("newInput").value = "";
  document.getElementById("newQuantity").value = "";
  document.getElementById("newPrice").value = "";

  removeElement();
};
