



 const button= document.getElementById("calcola");

 button.addEventListener("click", function(){

    let numero_km = document.getElementById("numkm").value;
    let eta = document.getElementById("etapers").value;
    
    let prezzo= numero_km * 0.21;
    
    if (eta == "fino17"){
        prezzo = prezzo - (prezzo * 0.2);
        
    }
    else if(eta == "O65"){
        prezzo = prezzo - prezzo * 0.4;    
    }

    prezzo= prezzo.toFixed(2);
    console.log(prezzo);
     
 })

 const buttondue= document.getElementById("reset");
 buttondue.addEventListener("click", function(){
    document.getElementById("nome_cognome").value=" ";
    document.getElementById("numkm").value=" ";
    document.getElementById("etapers").value="iniziale";
})


 


 
 



