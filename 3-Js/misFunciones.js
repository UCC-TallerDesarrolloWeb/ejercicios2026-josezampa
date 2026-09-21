/**
 * conversion de unidades metros, pies, yardas, pulgadas
 * @method cambiarunidades
 * @param {string} id - id de los inputs
 * @param {number} valor - el valor de los inputs
 * @return nada 
 */
function cambiarunidades(id, valor){
    if(isNan(valor)){
        alert('valor invalido');
        document.lasunidades.unid_metro.value = "";
        document.lasunidades.unid_pulada.value = "";
        document.lasunidades.unid_pie.value = "";
        document.lasunidades.unid_yarda.value = "";
    } else if(id="metro"){
        document.lasunidades.unid_pulgada.value = 39.37*valor;
        document.lasunidades.unid_pie.value = 3.28*valor;
        document.lasunidades.unid_yarda.value = 1.09*valor;
    } else if(id=="pulgada"){
        document.lasunidades.unid_metro.value = 0.03*valor;
        document.lasunidades.unid_pie.value = 0.08*valor;
        document.lasunidades.unid_yarda.value = 0.03*valor;
        
    } else if(id=="pie"){
        document.lasunidades.unid_metro.value = 0.30*valor;
        document.lasunidades.unid_pulgada.value = 12.00*valor;
        document.lasunidades.unid_yarda.value = 0.33*valor;
        
    } else if(id=="yarda"){
        document.lasunidades.unid_metro.value = 0.91*valor;
        document.lasunidades.unid_pulgada.value = 36.00*valor;
        document.lasunidades.unid_pie.value = 3.00*valor;
    }
}


function convertirgr(id){
    var grad, rad;

    if (id == "grados"){
        grad = document.getelementbyid("grados").value;
        rad = (grad*math.pi) / 180;
    } else if(id == "radianes") {
        rad = document.getelementbyid("radianes").value;
        grad = (rad*180) / math.pi;
    }

    document.getelementbyid("grados").value = grad;
    document.getelementbyid("radianes").value = rad;
}