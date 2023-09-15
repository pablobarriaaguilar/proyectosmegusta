function aumentarLikes(){
    var numero = parseInt(document.querySelector("#likes").innerText);
    numero = numero + 1;
    var likes = document.querySelector("span");
    likes.innerText = numero; 
    console.log(numero);

}