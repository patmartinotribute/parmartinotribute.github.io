var asunto;
var dictado;
var dictadoFinal;

/* Esta funcion se encarga de tomar el valor de los inputs para devolver la cadena del asunto */
function generarAsunto() {
var _numero = parseFloat(document.getElementById('num_caso').value);
var _nombreInst = document.getElementById('nombre_inst').value;
var _numInst = parseFloat(document.getElementById('num_inst').value);
/*Inicializo variable tipo para seleccionar un resultado según su valor inicial*/
var _tipo;
/*Seleccionador de valor :)*/
switch (document.getElementById('tipo_emergencia').value) {
    case '_fuga':
        _tipo = 'FUGA DE GAS';
        break;
    case '_noPase':
        _tipo = 'NO PASE DE GAS';
        break;
    case '_bajaPresion':
        _tipo = 'BAJA PRESIÓN';
        break;
    case '_tuberia':
        _tipo = 'PROBLEMAS CON TUBERÍA';
        break;
    case '_valvula':
        _tipo = 'PROBLEMAS CON LA VÁLVULA';
        break;
    case '_balonFalla':
        _tipo = 'BALÓN CON FALLA';
        break;
    case '_congelado':
        _tipo = 'CONGELAMIENTO DE LÍNEA DE GLP';
        break;
    case '_otros':
        _tipo = 'OTROS RECLAMOS POR PRODUCTO';
        break;
    case '_dial':
        _tipo = 'PROBLEMAS CON EL DIAL DE MEDICIÓN';
        break;
    case '_manometro':
        _tipo = 'PROBLEMAS CON EL MANÓMETRO';
        break;
    case '_medidor':
        _tipo = 'PROBLEMAS CON EL MEDIDOR';
        break;
    case '_regulador':
        _tipo = 'PROBLEMAS CON EL REGULADOR';
        break;
    case '_vap':
        _tipo = 'PROBLEMAS CON EL VAPORIZADOR';
        break;
    case '_tanque':
        _tipo = 'PROBLEMAS EN EL TANQUE';
        break;
    case '_sobreTanque':
        _tipo = 'SOBRELLENADO DE TANQUE';
        break;


}
asunto = `CASO: ${_numero} / ${_nombreInst} / ${_numInst} / ${_tipo}`;
/* un intento fallido de hacer el copy to clipboard
asunto.select();
document.execCommand('Copy'); */ 
console.log('Asunto: ')
console.log(asunto);
}
/* Esta funcion se encarga de tomar el valor de los inputs para devolver la cadena del DICTADO */
function generarDictado() {

    var _contacto = document.getElementById('persona_contacto').value;
    var _telefono = parseFloat(document.getElementById('telefono').value);
    var _dir = document.getElementById('direccion').value;
    var _ref = document.getElementById('referencia').value;
    var _med = document.getElementById('medidor').value;
    var _canal;
    switch (document.getElementById('canal').value) {
        case '_DC':
            _canal = 'DC'
            break;
        case '_CA':
            _canal = 'CA'
            break;
        case '_AU':
            _canal = 'AU'
            break;
        case '_SI':
            _canal = 'SI'
            break;
        case '_DS':
            _canal = 'DS'
            break;
    }
    var _obs = document.getElementById('observacion').value;
if (_canal === 'CA' && _med !== "") {
    dictado = `Contacto: ${_contacto}
Teléfono: ${_telefono}
Dirección: ${_dir}
Referencia: ${_ref}
Medidor: ${_med}
Canal: ${_canal}
Observación del cliente: ${_obs}`;
}else{
    dictado = `Contacto: ${_contacto}
Teléfono: ${_telefono}
Dirección: ${_dir}
Referencia: ${_ref}
Canal: ${_canal}
Observación del cliente: ${_obs}`;
    }
console.log('Dictado:')
console.log(dictado);
}
/* Esta funcion se encarga de tomar el valor de los inputs para devolver la cadena CUERPO DEL CORREO */
function generarCorreo() {
console.clear();
    var _recibidoPor = document.getElementById('recibido').value;
    var _hora = document.getElementById('hora').value;

    dictadoFinal = `${asunto}
    
Estimados;
    
El presente es para informar que se brindaron los datos a ${_recibidoPor} para la atención a las ${_hora} horas. 
    
Envío datos del cliente con el siguiente detalle:

${dictado}`

    console.log(dictadoFinal);

}


