






function contarRegressivamente(){
    
    document.getElementById('botao').disabled = true;

    let numero = document.getElementById('numero').value;
    
    numero = parseInt(numero);
   
    if (isNaN(numero) || numero < 0) {
        document.getElementById('resultado').innerText ='Coloque um numero válido';
        
        document.getElementById('botao').disabled = false;
        return; 
    }

    let intervalo = setInterval(function(){
        document.getElementById('resultado').innerText = numero;

        if (numero <= 0 ){
            clearInterval(intervalo);
            document.getElementById('resultado').innerText= "Tempo esgotado!!!";
          
            document.getElementById('botao').disabled = false;
            return; 
        }

        numero--;
    }, 1000);
}