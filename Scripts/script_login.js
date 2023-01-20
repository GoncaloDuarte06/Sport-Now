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
        const aviso = document.getElementById("warning");
        aviso.children[0].innerHTML = "<p>Seja bem vindo admin</p>"
        aviso.style.display="flex"
        setTimeout(()=> {
            location.href = "gestaoUser.html";
         }
         ,3000);
    }else{
        alert("Crie uma conta por favor")
    }
    event.preventDefault();
})

function changeLogIn(){
    document.getElementById("user-signup").style.visibility = "visible";
    document.getElementById("user-login").style.visibility = "hidden";

    var  text = document.getElementsByClassName("user_options-unregistered")[0];
    
    var html = '<h2 class="user_unregistered-title">Have a account?</h2><p class="user_unregistered-text">Log in and come buy with us.</p><button class="user_unregistered-signup" id="login-button" onclick="changeSignup()">Login</button>';

    text.innerHTML = html;
}
function changeSignup(){
    document.getElementById("user-signup").style.visibility = "hidden";
    document.getElementById("user-login").style.visibility = "visible";

    //change content of title
    var  text = document.getElementsByClassName("user_options-unregistered")[0];
    
    var html = '<h2 class="user_unregistered-title">Dont have an account?</h2><p class="user_unregistered-text">Come join us in this mess of a WebSite</p><button class="user_unregistered-signup" id="signup-button" onclick ="changeLogIn()">Sign up</button>';

    text.innerHTML = html;

}
document.getElementById("ButtonSignup").addEventListener("click", function (event){
    const aviso = document.getElementById("warning");
        aviso.children[0].innerHTML = "<p>Conta criada com sucesso. Faça Login com o admin</p>"
        aviso.style.display="flex"
        aviso.style.backgroundColor = "green"
        setTimeout(()=> {
            location.reload()
         }
         ,3000);
         event.preventDefault()

})
    