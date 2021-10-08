function cadProduto(NomeProduto,CodigoProduto,QntdProduto){
    let nome = document.getElementById(NomeProduto).value;
    let codigo = document.getElementById(CodigoProduto).value;
    let qntdd = document.getElementById(QntdProduto).value;

    if (nome == "")
        alert("Por favor preencha todos os campos");
    else if (codigo == "")
    alert("Por favor preencha todos os campos");
    else produtoVerificado(nome, codigo, parseInt(qntdd));  
}

function produtoVerificado(nome,cod, qntdd) {
    let novoProduto = {nome:nome, codigo:cod, qntdd:qntdd};

    
        let produtos = localStorage.getItem("produtos")
        if (produtos == null) produtos = [];
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto);
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Produto Cadastrado ");
    
    
  }

function estoque() {
    
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Controle do Estoque:</h1>")
        if(produtos == null)
            document.write("<h3>Ainda não ha nenhum produto</h3>");
        else{
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Codigo do produto: "+produto.codigo+"</li>");
                document.write("<li>Quantidade no estoque: "+produto.qntdd+"</li>");
                document.write("</ul>");
            });
        }
        
    
  }