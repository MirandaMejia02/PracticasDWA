// Objeto con varias propiedades
const producto = {
    nombre: "Laptop",
    precio: 800,
    disponible: true
};

// Uso de un bucle para iterar sobre las propiedades del objeto
for (let propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
}
