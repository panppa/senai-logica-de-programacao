//Simulação banco de dados ps: só percebi dps que era só de nomes femininos
//ps2: peguei daqui: https://exame.com/pop/os-100-nomes-de-bebes-femininos-mais-populares-em-2022/
var participantes = ["Helena","Alice","Laura","Manuela","Sophia","Isabella","Luísa","Heloísa","Cecília","Maitê","Eloá","Elisa","Liz","Júlia","Maria Luísa","Valentina","Maria Alice","Lívia","Antonella","Lorena","Ayla","Isis","Maria Júlia","Maya","Maria Clara","Esther","Giovanna","Lara","Sarah","Beatriz","Aurora","Mariana","Maria Cecília","Olívia","Maria Helena","Isadora","Luna","Catarina","Melissa","Maria Eduarda","Lavínia","Agatha","Emanuelly","Maria","Alícia","Rebeca","Ana Clara","Yasmin","Clara","Marina","Ana Júlia","Ana Luísa","Isabelly","Ana Laura","Rafaela","Ana Liz","Stella"];
//--
function listaParticipantes(nome){
    console.log("-",nome)
}
//Definir datas (vi na atividade do amiguinho e dei uma adapdata, créditos pro https://github.com/Renatofsant tbm 🙏🙏)
let dataEvento = 20/10
let dataAtual = 15/10
//--
nome = "Gabriel"
let idade = 19

console.log("Atualmente estão cadastrados",participantes.length,"participantes, confira a lista:" )

participantes.forEach(listaParticipantes)

if(dataEvento>dataAtual){
    if(idade >= 18){
        if(participantes.length<= 100){
            participantes.push(nome)
            console.log("Parabéns",nome,", seu cadastro foi realizado")  
        }else{
            console.log("Cadastro não permitido pois o limite de participantes foi excedido")  
        }
    }else{
        console.log("Cadastro não permitido para menores de 18 anos")  
    }
}else{
    console.log("Cadastro não permitido pois o evento já foi realizado")  
}
