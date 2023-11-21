



 const button= document.getElementById("calcola");

 button.addEventListener("click", function(){

    /* input e crezione contenitori */
    let nameSurname= document.getElementById("nome_cognome").value;
    let numero_km = document.getElementById("numkm").value;
    let eta = document.getElementById("etapers").value;
    
    /* calcolo del prezzo */
    let prezzo= numero_km * 0.21;
   
    if (eta == "fino17"){
        prezzo = prezzo - (prezzo * 0.2);
        
    }
    else if(eta == "O65"){
        prezzo = prezzo - prezzo * 0.4;    
    }

   
     document.getElementById("name_passanger").innerHTML = " ";  /* svuoto il contenitorte in modo che ad ogni ricalcolo non faccia l aggiunta del nome  */
   
    /*modifichiamo il risultato in modo che bbai 2 numeri dopo la virgola  */
    prezzo= prezzo.toFixed(2);
    

    document.getElementById("costo").innerHTML= prezzo +"€";
    document.getElementById("name_passanger").innerHTML = nameSurname;

 })


 /* fuonzionamento bottone cancella */
 const buttondue= document.getElementById("reset");
 buttondue.addEventListener("click", function(){
    document.getElementById("nome_cognome").value=" ";
    document.getElementById("numkm").value=" ";
    document.getElementById("etapers").value="iniziale";
})

 

 


 
 



