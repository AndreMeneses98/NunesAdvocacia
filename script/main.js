var nome = document.getElementById("nome").value;
var mensagem = "Olá,%20me%20chamo%20"+nome;
var whatsappLink = document.getElementById("whatsapp-link");
var mensagemCodificada = encodeURIComponent(mensagem);
whatsappLink.setAttribute("href", "https://api.whatsapp.com/send?phone=5579981536971&text=" + nome);