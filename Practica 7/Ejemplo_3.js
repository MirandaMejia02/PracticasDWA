// Objeto que contiene otros objetos como propiedades
const estudiante = {
    nombre: "Miguel",
    edad: 20,
    direccion: {
        calle: "Calle Principal Hacia el cementerio", //No no es bait
        ciudad: "Berlín'"
    },
    materias: ["Matemáticas", "Programación", "RRHH"]
};

// Acceso a propiedades anidadas
console.log(estudiante.direccion.ciudad);
console.log(estudiante.materias[1]);
