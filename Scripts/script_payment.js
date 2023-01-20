var para = new URLSearchParams(window.location.search);
var pass = para.get("price").replace("$","");
document.getElementById("amount").value = pass; 

document.getElementById("submit").addEventListener("click", function (event){
    const aviso = document.getElementById("warning");
    const cartão = document.getElementById("card").value;
    const CVC = document.getElementById("CVC").value;
    const exp = document.getElementById("exp").value;
    var checker = false
    if (cartão == "" || cartão != "1111-2222-3333-4444"){
        aviso.children[0].innerHTML = "<p>Numero de cartão errado</p>"
        aviso.style.display="flex"
        return 0
    }else{
        checker = true
        aviso.style.display="none"
    }
    if(CVC == "" || CVC != "123"){
        aviso.children[0].innerHTML = "<p>Numero de CVC errado</p>"
        aviso.style.display="flex"
        return 0
    }else{
        checker = true
        aviso.style.display="none"
    }
    if(exp == ""){
        aviso.children[0].innerHTML = "<p>Não preencheu ano de validade</p>"
        aviso.style.display="flex"
        return 0
    }else{
        checker = true
        aviso.style.display="none"
    }
    console.log(checker)
    if(checker == true){
        aviso.children[0].innerHTML = "<p>You have been scammed. Congrats!!</p>"
        aviso.style.display="flex"
        aviso.style.backgroundColor = "green"
    }
    event.preventDefault();
})
