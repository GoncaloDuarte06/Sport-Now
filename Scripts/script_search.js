function showElements(element){

}



document.getElementById("search-btn").addEventListener("click", function(event){
    var search = document.getElementById("search").value;
    var sapatilhas = ["sapatilhas","sapatilha","sneakers","shoes","shoe","tilhas"];
    var camisolas = ["camisola","camisolas","tshirt","shirt","caveada"];
    var calcas = ["calcas","calca", "trousers","trouser"];

    for(let i; i < sapatilhas.length;i++){
        if (search.toLowerCase() == sapatilhas[i]){
            showElements("sapatilhas");
            break;
        }
    }
    for(let i; i < camisolas; i++){
        if(search.toLowerCase().replace("-","") == camisolas[i]){
            showElements("camisolas");
            break;
        }
    }
    for(let i; i < calcas; i++){
        if(search.toLowerCase().replace("ç","c") == calcas[i]){
            showElements("calcas");
            break;
        }
    }
    event.preventDefault()
})

