$(function () {

    "use strict"; // obriga inicializar todas as variaveis
    var debug = true;

    var campoPesquisa = document.getElementById('campoPesquisa');
    var container_resultados = document.getElementById('container-resultado');
    var sugestoes_produtos = document.getElementById('sugestoes-produtos');
    var resultado_busca = document.getElementById('resultado-busca');
    var js_newletter = $('#js-newletter');

    //array de sugestões de produtos
    var ar_sugestoes_produtos = [ // 'ar' na frente do nome da variavel é para saber que ela é um array
        "Detergente",
        "Café",
        "Erva",
        "Cerveja"
    ];

    //array de resultado de busca
    var ar_resultado_busca = [
        {
            "nome": "Computador Dell",
            "descricao": "test texto texto texto",
            "img": "../ecommerce/assets/img/img01.png",
            "link": "http://compasso.com.br",
            "preco": 10.5
        },
        {
            "nome": "Notebook HP",
            "descricao": "test texto texto texto",
            "img": "../ecommerce/assets/img/img02.png",
            "link": "http://compasso.com.br",
            "preco": 210.5
        },
        {
            "nome": "Teclado Assus",
            "descricao": "test texto texto texto",
            "img": "../ecommerce/assets/img/img03.png",
            "link": "http://compasso.com.br",
            "preco": 2.5
        }
    ];
    cl(ar_resultado_busca);


    function cl(msg) {
        if (debug) console.log(msg);
    };

    function autocompleta() { //função que autocompleta o campo pesquisa 
        campoPesquisa.autocomplete({
            source: ar_resultado_busca.nome
        });
        return false;
    }

    function renderizaSugestoes() {
        var retorno = "";
        for (var i = 0; i < ar_sugestoes_produtos.length; i++) {
            cl(ar_sugestoes_produtos[i]);
            retorno += "<p>" + ar_sugestoes_produtos[i] + "</p>";
        };
        cl(retorno);
        sugestoes_produtos.innerHTML = retorno;
    };

    function renderizaResultadoBusca() {
        var retorno = "";
        for (var i = 0; i < ar_resultado_busca.length; i++) {
            cl(ar_resultado_busca[i]);
            retorno += "<div id='box-produto'>" +
                "<h3>" + ar_resultado_busca[i].nome + "</h3>" +
                "<img src='" + ar_resultado_busca[i].img + "'>" +
                "<p>" + ar_resultado_busca[i].descricao + "</p>" +
                "<p>" + ar_resultado_busca[i].preco + "</p>" +
                "<a href='" + ar_resultado_busca[i].link + "'>Veja mais</a>" +
                "</div>";
        };
        cl(retorno);
        resultado_busca.innerHTML = retorno;
    };




    campoPesquisa.onfocus = function () {
        cl('Entrou no campo');
        container_resultados.style.display = "block";
        if (this.value.length === 0) {
            cl("exibe sugestões esconde lista");
            sugestoes_produtos.style.display = "block";
            resultado_busca.style.display = "none";
        } else {
            cl('exibe lista esconde sugestões');
            sugestoes_produtos.style.display = "none";
            resultado_busca.style.display = "block";
        }
    };

    campoPesquisa.onblur = function () {
        cl('Saiu do campo');
        container_resultados.style.display = "none";
        //$(campoPesquisa)[0].reset();
    };

    campoPesquisa.onkeyup = function () {
        container_resultados.style.display = "block";
        if (this.value.length === 0) {
            cl("exibe sugestões esconde lista");
            sugestoes_produtos.style.display = "block";
            resultado_busca.style.display = "none";
        } else {
            cl('exibe lista esconde sugestões');
            sugestoes_produtos.style.display = "none";
            resultado_busca.style.display = "block";
        }
    };


    renderizaSugestoes(); // chama a função renderizaSugestoes
    renderizaResultadoBusca(); // chama a função 
    autocompleta(); // chama a função de auto completar o campo de pesquisa


    //valida formulário do rodapé
    js_newletter.bind('keydown', function (event) {
        if (event.keyCode == 13) { //pega o evento enter no campo txtcep
            event.preventDefault();

            


        }
    });

});