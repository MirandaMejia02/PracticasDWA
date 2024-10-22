var factura = {
    numero: 650,
    cliente: 'Servicios de rescate',
    vencimientos: {
        1: new Date(2023, 10, 20),
        2: new Date(2023, 9, 30),
        3: new Date(2023, 12, 1)
    }
}

var numeroFactura = factura.numero;
var primerVencimiento = factura.vencimientos[1];
console.log('El segundo vencimiento de la Factura ' + numeroFactura + ' será el ' + primerVencimiento.getDate());
