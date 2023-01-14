function isValidEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //regex that checks the content to match [string]@[string].[string] 
    return re.test(String(email).toLowerCase());
  }
  

var button = document.getElementById("buttonLogin")
button.addEventListener("click", function (event){
    var email = document.getElementById("emailLogin").value;
    var password = document.getElementById("passwordLogin").value;
    //Checks formats and is filed
    if(isValidEmail(email) == false || password == ""){
        alert("Dados incorreto!! Verifique o formato do email e a palavra passe");
        event.preventDefault();
        return false
    }
    
    if(email == "admin@gmail.com" && password == "admin"){
        alert("Bem vindo Admin")
        location.href = "index.html";
    }else{
        alert("Crie uma conta por favor")
    }
    event.preventDefault();
})