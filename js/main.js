$(document).ready(function(){ // Garante que todo o código dentro seja executado apenas após o documento estar totalmente carregado.
    $('#carousel-imagens').slick({ // Inicializa o carrossel de imagens com a funcionalidade de autoplay (troca automática de slides).
        autoplay: true,
    });

    $('.menu-hamburguer').click(function(){ 
        $('nav').slideToggle();
        // Adiciona um evento de clique ao menu hambúrguer que alterna a exibição da navegação com uma animação de deslizamento.
    })

    $('#telefone').mask('(00) 00000-0000'); // Aplica uma máscara ao campo de telefone para garantir que o usuário insira o número no formato correto.

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor insira o seu nome'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });
    /*
    Configura a validação do formulário:
    Define as regras de validação para cada campo.
    Define as mensagens de erro personalizadas.
    Define ações específicas quando o formulário é submetido corretamente (submitHandler) ou incorretamente (invalidHandler).
    submitHandler: Executa uma ação (neste caso, loga o formulário no console) quando a validação é bem-sucedida.
    invalidHandler: Exibe um alerta com o número de campos incorretos quando a validação falha.
    */

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoInteresse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
});
/*
Adiciona funcionalidade aos botões "Tenho Interesse":
Ao clicar em um botão, o campo "Veículo de interesse" no formulário de contato é preenchido com o nome do veículo selecionado.
A página é rolada suavemente até a seção de contato (#contato) em 1 segundo (1000 milissegundos).
*/

