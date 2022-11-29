//Circuito de referencia número 1
//Resistencias y voltages
var ra=2,rb=3,rc=5,rd=4,re=2;
var v=12;
//Evento click
document.getElementById("btn01").addEventListener("click",resolver);
document.getElementById("btn02").addEventListener("click",tablero);
//Texto
var textoA = document.getElementById("textA");
var textoB = document.getElementById("textB");
var textoC = document.getElementById("textC");
var textoD = document.getElementById("textD");
var textoE = document.getElementById("textE");
var textoO = document.getElementById("textO");
var resN2 = document.getElementById("ResultadoN2");
var resN3 = document.getElementById("ResultadoN3");
var corria = document.getElementById("corr_ia");
var corrib = document.getElementById("corr_ib");
var corric = document.getElementById("corr_ic");
var corrid = document.getElementById("corr_id");
var corrie = document.getElementById("corr_ie");
//Funciones
function tablero(){
    window.location.href = "Cubos1.html";
}
function resolver(){
    //Resistencias y voltages
    v = parseInt(document.getElementById("V1").value);
    ra = parseInt(document.getElementById("R1").value);
    rb = parseInt(document.getElementById("R2").value);
    rc = parseInt(document.getElementById("R3").value);
    rd = parseInt(document.getElementById("R4").value);
    re = parseInt(document.getElementById("R5").value);
    //Variables auxiliares
    var A = (1/ra)+(1/rb)+(1/rc)+(1/rd);
    var B = (1/rb)+(1/rc);
    var C = v/ra;
    var D = (1/rb)+(1/rc);
    var E = (1/rb)+(1/rc)+(1/re);
    //Voltage en nodos y cálculo de corrientes
    var N3 = -C/(B-(E*A/D));
    var N2 = N3*E/D;
    var ia = (v-N2)/ra;
    var ib = (N2-N3)/rb;
    var ic = (N2-N3)/rc;
    var id = N2/rd;
    var ie = N3/re;
    //Imprimir
    textoA.textContent=A;
    textoB.textContent=B;
    textoC.textContent=C;
    textoD.textContent=D;
    textoE.textContent=E;
    textoO.textContent="0";
    resN2.textContent=N2;
    resN3.textContent=N3;
    corria.textContent=ia;
    corrib.textContent=ib;
    corric.textContent=ic;
    corrid.textContent=id;
    corrie.textContent=ie;
}