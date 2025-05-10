// Este archivo contiene el código JavaScript que puede agregar interactividad a la página. 
// Puedes incluir funciones para mostrar mensajes o animaciones. 

document.addEventListener('DOMContentLoaded', () => {
    const mensaje = document.getElementById('mensaje');

    // Muestra el mensaje
    mensaje.textContent = "Feliz día de la madre mami. Espero que tengas un día maravilloso. Te quiero mucho.";
    mensaje.style.display = 'block';

    // Opcional: Oculta el mensaje después de unos segundos
    setTimeout(() => {
        mensaje.style.display = 'none';
    }, 25000); // Oculta el mensaje después de 25 segundos
});

function abrirCarta() {
    const cartaAbierta = document.querySelector('.carta-abierta');
    const cartaCerrada = document.querySelector('.carta-cerrada');
    const lluviaCorazones = document.createElement('div');
    lluviaCorazones.classList.add('lluvia-corazones');
    document.body.appendChild(lluviaCorazones);

    // Oculta la carta cerrada
    cartaCerrada.style.display = 'none';

    // Activa la carta abierta
    cartaAbierta.classList.add('active');

    // Genera corazones animados
    const generarCorazones = setInterval(() => {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon-lluvia');
        corazon.textContent = '💗';
        corazon.style.left = `${Math.random() * 100}vw`; // Posición horizontal aleatoria
        corazon.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duración aleatoria entre 3 y 5 segundos
        lluviaCorazones.appendChild(corazon);

        // Elimina el corazón después de la animación
        corazon.addEventListener('animationend', () => {
            corazon.remove();
        });
    }, 200); // Genera un corazón cada 200ms

    // Detén la generación de corazones después de 5 segundos
    setTimeout(() => {
        clearInterval(generarCorazones);
    }, 5000);
}