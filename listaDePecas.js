var listaDePecas = ["Amortecedor","Filtro de Ar","Disco de freio"]

if(listaDePecas.length < 10){
    console.log("É possivel cadastrar mais peças.")
} else{
    console.log("Não é possível cadastrar mais peças pois a lista está cheia.")
}

let peso = 500

if(peso < 100){
    console.log("A peça precisa ter no mínimo 100 gramas para ser inserida na lista")
}else{
    console.log("A peça possui o peso necessário para ser adicionada")
}

let nomePeca = "Caixa de cambio"
if((nomePeca.length >= 4)&&(nomePeca.length<1000)){
    console.log("O tamanho do nome da peça está adequado")
}else{
    console.log("O nome deve terno mínimo 4 caracteres, digite um nome adequado")
}
