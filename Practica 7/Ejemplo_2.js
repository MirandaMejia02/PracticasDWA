// Objeto que incluye métodos para realizar acciones
const coche = {
    marca: "Ford",
    modelo: "F-250",
    encender: function() {
        console.log("El coche está encendido");
    },
    apagar: function() {
        console.log("El coche está apagado");
    }
};

// Uso de los métodos del objeto
coche.encender();
coche.apagar();
