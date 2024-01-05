function carregarInformacoes() {
    ["pais", "datas", "levarSelecionado", "anotacoes"].forEach((id) => {
      document.getElementById(id).value = localStorage.getItem(id) || "";
    });
  }




  function salvarInformacoes() {
    ["pais", "datas", "levarSelecionado", "anotacoes"].forEach((id) => {
      localStorage.setItem(id, document.getElementById(id).value);
    });
  }


  

  carregarInformacoes();
  window.addEventListener("beforeunload", salvarInformacoes);


  /*O código em JavaScript consiste em duas funções, carregarInformacoes e salvarInformacoes, que lidam com a carga e armazenamento local de informações de elementos HTML. 
  

  A função carregarInformacoes preenche os elementos com valores armazenados localmente.
  A função salvarInformacoes atualiza o armazenamento local com os valores atuais dos elementos. 
  

  Essas funções são chamadas durante o carregamento da página e antes de descarregá-la, respectivamente, para garantir as informações do usuário entre as sessões */