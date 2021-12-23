import { renderizaNaTabela } from "./main.js"

export function transformaPalavra (pala){
    const palaAtuali = compara(pala)

    if(palaAtuali){
    renderizaNaTabela(palaAtuali)
    }
}

const numEscritos = ["um","dois","tres","quatro", "cinco"]
const erroNumeNaoAcha = document.querySelector("[data-erro]")

function compara(pala){
    var achou = false
    for (let i = 0; i < numEscritos.length; i++) {
            if ( pala == numEscritos[i]){
                const numeroCorrespondente = i + 1
                const numeroFinal = numEscritos[i] + " " + numeroCorrespondente
                console.log(i)
                var achou = true
                return numeroFinal
            }else{
                $(erroNumeNaoAcha).removeClass("esconde")
            setTimeout(() => { $(erroNumeNaoAcha).addClass("esconde")}, 5000)
    
            var achou = false
            }
        }
    
    
    return achou
}
