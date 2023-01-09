let atletas = [
    {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
    },
    {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
    },
    {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
    }
]
    
for (let c= 0; c < atletas.length; c++){
    let notas = atletas[c].notas.sort(compararNotas);
    let nome = atletas[c].nome
    let notasValidas = notas.slice(1,4)
    let media = obterMedia(notasValidas)
    console.log (`Atleta: ${nome} 
Notas Obtidas:${notas}
Média Válida:${media}
`
)}
        
function compararNotas (a, b) {
    return a - b
}
        
function obterMedia(notas){
    let soma = 0
    notas.forEach(function(nota){
        soma = soma + nota
    })
    return soma / notas.length
}
    
    