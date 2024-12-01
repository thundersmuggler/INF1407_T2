var pagina_acesso = '<h1>Yarn Stash</h1><h2>Acesse sua conta</h2><form><input type="button" value="Entrar" onclick="migrar_login()"><input type="button" value="Criar conta" onclick="migrar_signin()"></form>'
var pagina_cadastro = '<h1>Yarn Stash</h1><h2>Cadastre-se</h2><form><input type="button" value="Entrar" onclick="migrar_login()"><input type="button" value="Criar conta" onclick="migrar_signin()"></form>'
var minha_variavel = new PageTransitionEvent
function imprimir_pagina_acesso() {
    document.write(pagina_acesso);
}

function imprimir_pagina_cadastro() {
    document.write(pagina_cadastro);
}

/*
alert("Site aberto!");
{
document.write("<h1>Este é um cabeçalho</h1>");
document.write("<p>Isto é um parágrafo.</p>");
document.write("<p>Este é outro parágrafo.</p>");
}
var nome = prompt("Alerta! Você está atento?!", "Não!");
document.write(nome);
var variavel;
variavel +1;
document.write(variavel);
var data, hora;
data = new Date();
hora = data.getHours();
if (hora<12)
document.write("<b>Bom dia</b>");
if (hora>12)
if (hora<18)
document.write("<b>Boa tarde</b>");
if (hora>18)
document.write("<b>Boa noite</b>");
*/