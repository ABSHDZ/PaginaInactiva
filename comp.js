document.getElementById("btn01").addEventListener("click", imagen01);
document.getElementById("btn02").addEventListener("click", imagen02);
document.getElementById("btn03").addEventListener("click", imagen03);
document.getElementById("btn04").addEventListener("click", imagen04);
var myImagen = document.getElementById("img");
var li = "#";
myImagen.addEventListener("click", subPaginas);
function imagen01(){
    myImagen.src="Complementos/Modelos 3D/Diagrama 1/Diagrama 1 png.png";
    li = "Complementos/Diagrama1.html";
}
function imagen02(){
    myImagen.src="Complementos/Modelos 3D/Diagrama 2/Diagrama 2 png.png";
    li = "Complementos/Modelos 3D/Diagrama 2/D2M.html";
}
function imagen03(){
    myImagen.src="Complementos/Modelos 3D/Diagrama 3/Diagrama 3 png.png";
    li = "Complementos/Modelos 3D/Diagrama 3/D3M.html";
}
function imagen04(){
    myImagen.src="Complementos/Modelos 3D/Diagrama 4/Diagrama 4 png.png";
    li = "Complementos/Modelos 3D/Diagrama 4/D4M.html";
}
function subPaginas(){
    window.location.href = li;
}