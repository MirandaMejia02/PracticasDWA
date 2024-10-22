// Objeto que permite modificar o agregar propiedades
const libro = {
    titulo: "Hábitos Atómicos",
    autor: "James Clear"
};

// Agregar nueva propiedad
libro.año = 2018;
libro.genero = "Desarrollo personal";

// Modificar propiedad existente
libro.autor = "James Clear";

// Ver resultado
console.log(libro);
// Output: { titulo: "Hábitos Atómicos", autor: "James Clear", año: 2018, genero: "Desarrollo personal" }
