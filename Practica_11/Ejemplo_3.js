// Función que recibe datos de usuario y separa el resto de la información
function procesarUsuario(nombre, edad, ...otrosDatos) {
    let usuarioFormateado = {
        nombre,
        edad,
        // Usamos Spread para agrupar los datos adicionales en un solo objeto
        infoAdicional: { ...otrosDatos }
    };
    return usuarioFormateado;
}

// Simulamos datos recibidos de una API
let usuario = procesarUsuario("Miguel", 20, "Ingeniera", "Canada", "Junio 2021");

console.log(usuario);
/* Resultado:
{
    nombre: "María",
    edad: 30,
    infoAdicional: { '0': 'Ingeniera', '1': 'España', '2': 'marzo 2024' }
}
*/
