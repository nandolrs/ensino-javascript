/*
Existem 4 métodos principais que podem ser utilizados na internet: POST, GET, PUT e DELETE.
Os 4 métodos formam o famoso CRUD ([C]reate, [R]ead, [U]pdate e [D]elete)
Vamos buscar dados na internet utilizando o método GET.
verbos da internet (o famoso CRUD)

    POST    = incluir   (Create)
    GET     = consultar (Read)
    PUT     = alterar   (Update)
    DELETE  = apagar    (Delete)
*/

// utilizando request

debugger;

requisicao = new Request('https://www.negritando.com/ensino-javascript/json/personalidades.json');

requisicao.method = 'GET';

fetch(requisicao)
    .then((resposta) =>{

        console.log('deu certo');

        resposta.json()
            .then((personalidades) => {
                debugger;

                nome = personalidades[0].nome;
                descricao = personalidades[0].descricao;

                nome = personalidades[1].nome;
                descricao = personalidades[1].descricao;
                
                nome = personalidades[2].nome;
                descricao = personalidades[2].descricao;

            })
            .catch((dadosErro)=>{

            })
    })
    .catch((erro) => {
        console.log('deu deu erro');
    })
