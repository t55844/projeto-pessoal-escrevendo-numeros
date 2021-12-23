import { transformaPalavra } from "./transforma.js"

const inputMain = $(".palavra__desafio")
const botaoEnv = $("[data-botaoEnv]")



$(botaoEnv).click(function(e){
    e.preventDefault()
    const palavra = inputMain.val()
    transformaPalavra(palavra)
})


export function renderizaNaTabela (palaAtua){
    const tabela = $("[data-tabelaResu]")
    const linha = `<tr> <td>${palaAtua}</td> </tr>`


    $(tabela).append(linha);

    console.log("3")

}