async function buscaEndereco(cep) {
    var menssagemErro = document.getElementById('erro');
    menssagemErro.innerHTML = "";
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();

        if(consultaCEPConvertida.erro) {
            throw Error('CEP não existente')
        }
        
        var campoCidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro = document.getElementById('bairro');
        
        campoCidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;


        console.log(consultaCEPConvertida);
    } catch (erro) {
        menssagemErro.innerHTML = `<p> CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
    
}
    var cep = document.getElementById('cep')

cep.addEventListener("focusout", () => buscaEndereco(cep.value));
