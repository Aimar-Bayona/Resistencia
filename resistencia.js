var bd1 = document.getElementById("progress");
var bd2 = document.getElementById("progress2");
var bd3 = document.getElementById("progress3");
var bd4 = document.getElementById("progress4");

var rs1 = document.getElementById("result1");
var rs2 = document.getElementById("result2");
var rs3 = document.getElementById("result3");
var rs4 = document.getElementById("result4");

document.getElementById("bd1").addEventListener("click", () => seleccionar(bd1, rs1, "#000", `0`));
document.getElementById("bd11").addEventListener("click", () => seleccionar(bd2, rs2, "#000", `0`));
document.getElementById("bd111").addEventListener("click", () => seleccionar(bd3, rs3, "#000", `x1`));
document.getElementById("bd1111").addEventListener("click", () => seleccionar(bd4, rs4, "#000", ``));
document.getElementById("bd2").addEventListener("click", () => seleccionar(bd1, rs1, "#804000", `1`));
document.getElementById("bd22").addEventListener("click", () => seleccionar(bd2, rs2, "#804000", `1`));
document.getElementById("bd222").addEventListener("click", () => seleccionar(bd3, rs3, "#804000", `x10`));
document.getElementById("bd2222").addEventListener("click", () => seleccionar(bd4, rs4, "#804000", `1%`));
document.getElementById("bd3").addEventListener("click", () => seleccionar(bd1, rs1, "#f00", `2`));
document.getElementById("bd33").addEventListener("click", () => seleccionar(bd2, rs2, "#F00", `2`));
document.getElementById("bd333").addEventListener("click", () => seleccionar(bd3, rs3, "#f00", `x100`));
document.getElementById("bd3333").addEventListener("click", () => seleccionar(bd4, rs4, "#f00", `2%`));
document.getElementById("bd4").addEventListener("click", () => seleccionar(bd1, rs1, "#f80", `3`));
document.getElementById("bd44").addEventListener("click", () => seleccionar(bd2, rs2, "#f80", `3`));
document.getElementById("bd444").addEventListener("click", () => seleccionar(bd3, rs3, "#f80", `x1000`));
document.getElementById("bd4444").addEventListener("click", () => seleccionar(bd4, rs4, "#f80", ``));
document.getElementById("bd5").addEventListener("click", () => seleccionar(bd1, rs1, "#ff0", `4`));
document.getElementById("bd55").addEventListener("click", () => seleccionar(bd2, rs2, "#ff0", `4`));
document.getElementById("bd555").addEventListener("click", () => seleccionar(bd3, rs3, "#ff0", `x10000`));
document.getElementById("bd5555").addEventListener("click", () => seleccionar(bd4, rs4, "#ff0", ``));
document.getElementById("bd6").addEventListener("click", () => seleccionar(bd1, rs1, "#008000", `5`));
document.getElementById("bd66").addEventListener("click", () => seleccionar(bd2, rs2, "#008000", `5`));
document.getElementById("bd666").addEventListener("click", () => seleccionar(bd3, rs3, "#008000", `x100000`));
document.getElementById("bd6666").addEventListener("click", () => seleccionar(bd4, rs4, "#008000", `0,5%`));
document.getElementById("bd7").addEventListener("click", () => seleccionar(bd1, rs1, "#00f", `6`));
document.getElementById("bd77").addEventListener("click", () => seleccionar(bd2, rs2, "#00f", `6`));
document.getElementById("bd777").addEventListener("click", () => seleccionar(bd3, rs3, "#00f", `x1000000`));
document.getElementById("bd7777").addEventListener("click", () => seleccionar(bd4, rs4, "#00f", `0,25%`));
document.getElementById("bd8").addEventListener("click", () => seleccionar(bd1, rs1, "#808", `7`));
document.getElementById("bd88").addEventListener("click", () => seleccionar(bd2, rs2, "#808", `7`));
document.getElementById("bd888").addEventListener("click", () => seleccionar(bd3, rs3, "#808", `x10000000`));
document.getElementById("bd8888").addEventListener("click", () => seleccionar(bd4, rs4, "#808", `0,10%`));
document.getElementById("bd9").addEventListener("click", () => seleccionar(bd1, rs1, "#555", `8`));
document.getElementById("bd99").addEventListener("click", () => seleccionar(bd2, rs2, "#555", `8`));
document.getElementById("bd999").addEventListener("click", () => seleccionar(bd3, rs3, "#555", `x100000000`));
document.getElementById("bd9999").addEventListener("click", () => seleccionar(bd4, rs4, "#555", `0,05%`));
document.getElementById("bd10").addEventListener("click", () => seleccionar(bd1, rs1, "#fff", `9`));
document.getElementById("bd100").addEventListener("click", () => seleccionar(bd2, rs2, "#fff", `9`));
document.getElementById("bd1000").addEventListener("click", () => seleccionar(bd3, rs3, "#fff", `x1000000000`));
document.getElementById("bd10000").addEventListener("click", () => seleccionar(bd4, rs4, "#fff", ``));
document.getElementById("bd01").addEventListener("click", () => seleccionar(bd1, rs1, "#B09F00", ``));
document.getElementById("bd011").addEventListener("click", () => seleccionar(bd2, rs2, "#B09F00", ``));
document.getElementById("bd0111").addEventListener("click", () => seleccionar(bd3, rs3, "#B09F00", ``));
document.getElementById("bd01111").addEventListener("click", () => seleccionar(bd4, rs4, "#B09F00", `5%`));
document.getElementById("bd12").addEventListener("click", () => seleccionar(bd1, rs1, "#A8A7A6", ``));
document.getElementById("bd122").addEventListener("click", () => seleccionar(bd2, rs2, "#A8A7A6", ``));
document.getElementById("bd1222").addEventListener("click", () => seleccionar(bd3, rs3, "#A8A7A6", ``));
document.getElementById("bd12222").addEventListener("click", () => seleccionar(bd4, rs4, "#A8A7A6", `10%`));

function seleccionar(bd, rs, color, dato) {
    bd.style.backgroundColor = color;
    rs.innerHTML = dato;
}

document.getElementById('bC').addEventListener("click", () => cl(rs1.innerHTML,rs2.innerHTML,rs3.innerHTML.slice(1), rs4.innerHTML));

function cl(b1, b2, b3, t){
    if(t == ""){
        document.getElementById("result5").innerHTML =(b1+b2) * b3 + "Ω";
    } else {
        document.getElementById("result5").innerHTML =(b1+b2) * b3 + "Ω al " + t;
    }
}