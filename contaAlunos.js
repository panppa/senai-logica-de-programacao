var numeroDeAlunos = 2039
for (var cont = 0; cont <= numeroDeAlunos; cont++){
    if(cont==0){
        console.log("uau,",cont,"é o número ZERO, quem diria?")
    }else{
        if (cont % 2 == 0) {
            console.log (cont,"é par")
        } else {
            console.log (cont,"é impar")
        }
    }
}