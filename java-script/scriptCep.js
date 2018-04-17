$(function () {


    var txtCep = $('#txtCep');
    var txtLogradouro = $('#txtLogradouro');
    var txtBairro = $('#txtBairro');
    var txtLocalidade = $('#txtLocalidade');
    var txtUf = $('#txtUf');

    txtCep.mask("99999-999");

    txtCep.bind('keydown', function (event) {
        if (event.keyCode == 13) { //pega o evento enter no campo txtcep
            event.preventDefault();

            //validar se o campo cep tem 8 caracteres, não tendo exibe um alert e limpa o campo
            if (txtCep.val().length != 9) {
                alert('O CEP deve ser preenchido com 8 caracteres numéricos');
                txtCep.val("");
                return false;
            }
            // mostra o pesquisando
            txtCep.next('span').removeClass('hide');


            var option = {
                "url" : "https://viacep.com.br/ws/"+txtCep.val().replace("-","")+"/json/"
            };

            

            $.ajax(option).done(function(data){
                console.log(data);
                txtLogradouro.val(data.logradouro);
                txtBairro.val(data.bairro);
                txtLocalidade.val(data.localidade);
                txtUf.val(data.uf);
            }).always(function(){
                txtCep.next('span').addClass('hide');
            });


        }
    });


})