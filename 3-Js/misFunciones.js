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



/**
 * conversion de angulos: grados a radianes y viceversa.
 * @method convertirgr
 * @param {string} id - id del input que desencadeno el evento (grados" o "radianes")
 * @return {void} 
 */
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



/** EJERCICIO DE REFACTORIZAR
 * conversion de unidades metros, pies, yardas, pulgadas
 * @method cambiarunidades
 * @param {string} id - id de los inputs
 * @param {number} valor - el valor de los inputs
 * @return nada 
 */
const convertirUnidades = (id, valor) => {

    let met, pul, pie, yar;
    if (typeof valor === "string" && valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor) || valor === "") {
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        pie = "";
        yar = "";
    } else {
        valor = parseFloat(valor);

        if (id === "metro") {
            met = valor;
            pul = valor * 39.3701;
            pie = valor * 3.28084;
            yar = valor * 1.09361;
        } else if (id === "pulgada") {
            met = valor * 0.0254;
            pul = valor;
            pie = valor * 0.0833333; 
            yar = valor * 0.0277778; 
        } else if (id === "pie") {
            met = valor * 0.3048;
            pul = valor * 12;
            pie = valor;
            yar = valor * 0.333333;  
        } else if (id === "yarda") {
            met = valor * 0.9144;
            pul = valor * 36;
            pie = valor * 3;
            yar = valor;
        }

        met = Math.round(met * 100) / 100;
        pul = Math.round(pul * 100) / 100;
        pie = Math.round(pie * 100) / 100;
        yar = Math.round(yar * 100) / 100;
    }
    document.lasUnidades.unid_metro.value = met;
    document.lasUnidades.unid_pulgada.value = pul;
    document.lasUnidades.unid_pie.value = pie;
    document.lasUnidades.unid_yarda.value = yar;
};



/**
 * muestra u oculta un elemento div en la página según la opción seleccionada.
 * @method mostrar_ocultar
 * @param {string} valorMO - el valor del radio button que desencadenó el evento ("val_mostrar" o "val_ocultar").
 * @return {void} 
 */
function mostrar_ocultar(valorMO){
    if(valorMO == "val_mostrar") {
        document.getElementById("divMO").style.display = 'block';
    }
    else if(valorMO == "val_ocultar") {
        document.getElementById("divMO").style.display = 'none';
    }
}


/**
 * muestra el elemento modal en la pagina
 * @method mostrarModal
 * @return {void}
 */
let mostrarModal = () => {
    document.getElementById("modal").style.display = 'block';
}
/**
 * oculta el elemento modal en la pagina
 * @method cerrarModal
 * @return {void}
 */
let cerrarModal = () => {
    document.getElementById("modal").style.display = 'none';
}




function calcularSuma() {
    var num1, num2;
    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;

    document.getElementsByName("sum_total")[0].value = Number(num1) + Number(num2);
}
function calcularResta() {
    var num1, num2;
    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;

    document.getElementsByName("res_total")[0].value = Number(num1) - Number(num2);
}
function calcularMultiplicacion() {
    var num1, num2;
    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;

    document.getElementsByName("mul_total")[0].value = Number(num1) * Number(num2);
}
function calcularDivision() {
    var num1, num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;

    document.getElementsByName("div_total")[0].value = Number(num1) / Number(num2);
}