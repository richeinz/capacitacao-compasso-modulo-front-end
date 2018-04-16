$(function(){ // função que será executada quando acabar de carregar sua página
    // var txt = document.getElementById('txt_nome');
    // var txt = $('#txt_nome');
    // txt.val('Novo valor do campo'); 

    /*setInterval(function(){

        txt.toggle(); // mostra ou esconde o que tem na tela

        if(txt.is(":visible")){ // se está visível na tela
            txt.hide('slow'); // tira da tela
        } else{
            txt.show('slow'); // aparece na tela
        }
    }, 2000)*/
    var div_produtos = $('#produtos');
    var div_frm_cadastro = $('#div_frm_cadastro');
    var div_msg_sucesso = $('.js-msg-sucesso');

    var txt_nome_produto = div_frm_cadastro.find('#txtNome');
    var txt_preco_produto = div_frm_cadastro.find('#txtPreco');

    var ar_produtos = [
        {"nome" : "produto 1", "valor" : "10.50"},
        {"nome" : "produto 2", "valor" : "19.50"},
        {"nome" : "produto 3", "valor" : "21.50"}
    ];

    function renderizaProdutos(){
        div_produtos.empty(); //limpo os objetos dentro da div

        $.each(ar_produtos, function(key, obj){
            // crio uma nova div e h1
            var div = $("<div>");
            var h1 = $("<h1>");
            var p = $("<p>");


            // adiciono o nome no h1
            h1.html(obj.nome);

            // adiciono o preco no p
            p.html(obj.valor);

            // adiciono h1 dentro da div
            div.append(h1);
            div.append(p);
            
            // adiciono o objeto div no container #produto
            div_produtos.append(div);
        })
    }

    div_frm_cadastro.find(".js-frm-cadastro").submit(function(e){
        e.preventDefault();

        ar_produtos.push(
            {
                "nome" : txt_nome_produto.val(),
                "valor" : txt_preco_produto.val()
            }
        );

        renderizaProdutos();

        $(this)[0].reset(); //reseta o formulário;

        div_msg_sucesso.removeClass('hide');
        setTimeout(function(){
            div_msg_sucesso.addClass('hide');
        }, 5000);

        $('html, body').animate({scrollTop: $(document).height()}, 2000);
        


    });

    renderizaProdutos();

});