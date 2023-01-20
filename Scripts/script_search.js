function showElements(element){
    const space = document.getElementById("ItemsDestaque");
    for (let i = 0; i < space.childElementCount;i++){

        if (String(space.children[i].id).trim() == String(element).trim()|| element =="all"){
            space.children[i].style.display = "inline";
        }else{
            space.children[i].style.display ="none";
        }
    }
}
function search(){
    var search = document.getElementById("search").value;
    var sapatilhas = ["sapatilhas","sapatilha","sneakers","shoes","shoe","tilhas"];
    var camisolas = ["camisola","camisolas","tshirt","shirt","caveada"];
    var calcas = ["calcas","calca", "trousers","trouser"];
    var filtro = ""
    for(let i = 0; i < sapatilhas.length;i++){
        if (search.toLowerCase().trim() == String(sapatilhas[i])){
            filtro = "sapatilhas";
            break;
        }
    }
    for(let i = 0; i < camisolas.length; i++){
        if(search.toLowerCase().replace("-","").trim() == String(camisolas[i])){
            filtro = "camisolas";
            break;
        }
    }
    for(let i = 0; i < calcas.length; i++){
        if(search.toLowerCase().trim()== String(calcas[i])){
            filtro = "calcas";
            break;
        }
    }
    if (filtro == ""){
        showElements("all")
    }else{
        showElements(filtro )
    }

    document.getElementById("search").value = ""
}
