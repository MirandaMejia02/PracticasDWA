let productos = [
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Bicicleta", precio: 300, categoria: "Deportes" },
    { nombre: "Teléfono", precio: 500, categoria: "Electrónica" },
    { nombre: "Zapatillas", precio: 100, categoria: "Deportes" }
];

// Función que filtra productos por categoría y reorganiza los precios en un arreglo aparte
function filtrarProductosPorCategoria(categoria, ...listaProductos) {
    let filtrados = listaProductos.filter(producto => producto.categoria === categoria);
    let precios = filtrados.map(producto => producto.precio);

    return {
        categoria,
        productosFiltrados: filtrados,
        // Usamos Spread para incluir los precios en el objeto final
        precios: [...precios]
    };
}

// Llamamos a la función con productos filtrados por "Electrónica"
let resultado = filtrarProductosPorCategoria("Electrónica", ...productos);

console.log(resultado);
