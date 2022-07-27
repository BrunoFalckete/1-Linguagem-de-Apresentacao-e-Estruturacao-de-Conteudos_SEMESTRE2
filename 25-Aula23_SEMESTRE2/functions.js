function showNav() {
    var nav = document.getElementById("items");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
    } else {
        nav.style.display = "flex";
    }
}
function generateNumbers() {
    let pares = document.getElementById("pares");
    let impares = document.getElementById("impares");
    var contpar = 1;
    var contimpar = 1;
    if(pares.children.length > 1){
        alert('Numeros já foram gerados!');
    } else {
        for(contpar = 1; contpar < 51; contpar++){
            if(contpar%2===0){
                var newSelect = document.createElement('option');
                newSelect.innerHTML = contpar;
                pares.appendChild(newSelect);
            }
        }
        for(contimpar = 50; contimpar < 101; contimpar++){
            if(contimpar%2!==0){
                var newSelect = document.createElement('option');
                newSelect.innerHTML = contimpar;
                impares.appendChild(newSelect);
            }
        }
    }
}
function renderOptions() {
    let estado = document.getElementById('estados').value;
    let cidades = document.getElementById('cidades');
    var cidade1 = document.createElement('option');
    var cidade2 = document.createElement('option');
    var cidade3 = document.createElement('option');
    
    if (cidades.hasChildNodes()){
        while(cidades.firstChild){
            cidades.removeChild(cidades.firstChild);
        }
    } 

    if(estado === 'SP'){
        cidade1.innerHTML = "Fernandópolis";
        cidade2.innerHTML = "Votuporanga";
        cidade3.innerHTML = "Andradina";
        cidades.appendChild(cidade1);
        cidades.appendChild(cidade2);
        cidades.appendChild(cidade3);
    } else if (estado === 'MS') {
        cidade1.innerHTML = "Três Lagoas";
        cidade2.innerHTML = "Selviria";
        cidade3.innerHTML = "Corumbá";
        cidades.appendChild(cidade1);
        cidades.appendChild(cidade2);
        cidades.appendChild(cidade3);
    } else {
        cidade1.innerHTML = "Rio de Janeiro";
        cidade2.innerHTML = "Cabo frio";
        cidade3.innerHTML = "Petrópolis";
        cidades.appendChild(cidade1);
        cidades.appendChild(cidade2);
        cidades.appendChild(cidade3);
    }
}