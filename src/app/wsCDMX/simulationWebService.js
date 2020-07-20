var error_no_conexion_db = "No es posible la transaccion: no hay conexion a la base de datos.";
var error_no_transaccion = "No es posible la transaccion: el comando es incorrecto.";
var error_no_lee_datos_guardados = "no se puede verificar la preexistencia de esta referencia";
var responseWS = {
    secuencia_trans: "",
    error: "1",
    descripcion: ""
};

var getResponse = function () {
    var randomInt = aleatorio(1, 3);
    switch (randomInt) {
        case 1:
            responseWS.descripcion = error_no_conexion_db;
            break;
        case 2:
            responseWS.descripcion = error_no_transaccion;
            break;
        case 3:
            responseWS.descripcion = error_no_lee_datos_guardados;
            break;

        default:
            responseWS.descripcion = "sin error";
            break;
    }
    return responseWS;
};

function aleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a));
}
module.exports.getResponse = getResponse;