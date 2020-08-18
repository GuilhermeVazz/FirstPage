function gerarSenha (){

var conteudo = "ABCDEFGHIJKLMNOPQRSTUVXWYZ1234567890"
var senha = ""


senha +=conteudo.charAt(Math.floor(Math.random()* conteudo.length) - 1)

return senha

}

console.log(gerarSenha())