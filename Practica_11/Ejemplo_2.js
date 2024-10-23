let estudiantes = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Carlos", nota: 9 },
    { nombre: "Luis", nota: 7 }
];

// Creamos una copia profunda usando Spread, modificando la nota de Luis
let estudiantesModificados = estudiantes.map(estudiante =>
    estudiante.nombre === "Luis"
        ? { ...estudiante, nota: 9 } // Spread clona el objeto y luego modificamos la propiedad "nota"
        : { ...estudiante } // Spread clona sin cambios
);

console.log(estudiantesModificados);
// Resultado: [{ nombre: "Ana", nota: 8 }, { nombre: "Carlos", nota: 9 }, { nombre: "Luis", nota: 9 }]
console.log(estudiantes); // La matriz original no cambia
