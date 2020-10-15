const botaoAdicionar = document.querySelector("#adicionar-cliente");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();
    
    const form = document.querySelector("#form-adiciona");
    const cliente = obtemDadosForm(form);

    console.log(cliente);
    
    const erro = validaCliente(cliente);

    if(erro.length > 0){
        exibeErro(erro);
        return;
    }
    
    adicionarClienteNaTabela(cliente);
    
    form.reset();
});


function obtemDadosForm(form){

    const cliente = {
        pet: form.pet.value,
        raca: form.raca.value,
        dono: form.dono.value,
        numero: form.numero.value
    }

    return(cliente);
}

function adicionarClienteNaTabela(cliente){
    const clienteTr = montarTr(cliente);
    const tabela = document.querySelector("#tabela-cliente");
    tabela.appendChild(clienteTr);
}

function montarTr(cliente){
    const clienteTr = document.createElement("tr");
    clienteTr.classList.add("cliente");

    clienteTr.appendChild(montarTd(cliente.pet, "info-pet"));
    clienteTr.appendChild(montarTd(cliente.raca, "info-raca"));
    clienteTr.appendChild(montarTd(cliente.dono, "info-dono"));
    clienteTr.appendChild(montarTd(cliente.numero, "info-numero"));

    return(clienteTr);
}

function montarTd(conteudo, classe){

    const td = document.createElement("td");

    td.textContent = conteudo;
    td.classList.add(classe);

    return(td);
}

function validaCliente(cliente){

    const erros = [];

    if(cliente.pet.length == 0)
        erros.push("Nome do pet em branco;");
    if(cliente.raca.length == 0)
        erros.push("Raça em branco;");
    if(cliente.dono.length == 0)
        erros.push("Nome do dono em branco;");
    if(cliente.numero.length == 0)
        erros.push("Telefone em branco;");

    return(erros);
}

function exibeErro(erro){
    const ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    erro.forEach(function(erro){
        const li = document.createElement("li");

        li.textContent = erro;
        ul.appendChild(li);
    });
}