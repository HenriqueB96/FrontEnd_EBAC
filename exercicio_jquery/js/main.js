/*Crie um formulário de cadastro 
campos: nome completo, e-mail, telefone, CPF, endereço completo e CEP;*/
$(document).ready(function(){
})

$('#telefone').mask('(00) 00000-0000',{
    placeholder:" (__) _____-____"
})
$('#cpf').mask('000.000.000-00',{
    placeholder:"___-___-___-__"
})
$('#cep').mask('00000-000',{
    placeholder:"_____-___"
})

$('form') .validate ({
    rules: {
        nome: {
            required:true
        },
        email: {
            required:true,
            email:true
        },
        telefone: {
            required:true
        },
        cpf: {
            required:true
        },
        endereco: {
            required:true
        },
        cep: {
            required:true
        },
        mensagem: {
            required:true
        }
    },
        messages : {
            nome: 'Por favor, insira seu nome',
            email:'por favor, seu email',
            telefone:'Por favor, digite seu telefone',
            cpf:'Por favor, digite seu CPF',
            endereco:'Por favor, digite seu Endereço',
            cep:'Por favor, digite seu CEP',
            mensagem:'Escreva sua carta ao velho noel'
        },

        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();
            if (camposInvalidos) {
                alert(`Existem ${camposInvalidos} campos incorretos`)
            }
        }
})