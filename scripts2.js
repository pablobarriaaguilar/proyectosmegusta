function likes(element){
     console.log(element.id);

     if(element.id =="btnneil"){

        var suma = parseInt(document.getElementById("neillikes").innerText)+ 1;
        document.getElementById("neillikes").innerText = suma;
        
        
     }
     else if(element.id =="btnnichole"){

        var suma = parseInt(document.getElementById("nicholelikes").innerText)+ 1;
        document.getElementById("nicholelikes").innerText = suma;
     }else{
        var suma = parseInt(document.getElementById("jimlikes").innerText)+ 1;
        document.getElementById("jimlikes").innerText = suma;
     }
}