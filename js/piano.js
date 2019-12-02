//Voy a comentar muchas tonterías para no perderme después de navidades


//Asignamos audios a las constantes
const C4 = new Audio("audios/C4.mp3");
const Db4 = new Audio("audios/Db4.mp3");
const D4 = new Audio("audios/D4.mp3");
const Eb4 = new Audio("audios/Eb4.mp3");
const E4 = new Audio("audios/E4.mp3");
const F4 = new Audio("audios/F4.mp3");
const Gb4 = new Audio("audios/Gb4.mp3");
const G4 = new Audio("audios/G4.mp3");
const Ab4 = new Audio("audios/Ab4.mp3");
const A4 = new Audio("audios/A4.mp3");
const Bb4 = new Audio("audios/Bb4.mp3");
const B4 = new Audio("audios/B4.mp3");
const C5 = new Audio("audios/C5.mp3");
const Db5 = new Audio("audios/Db5.mp3");
const D5 = new Audio("audios/D5.mp3");
const Eb5 = new Audio("audios/Eb5.mp3");
const E5 = new Audio("audios/E5.mp3");


const reproducirAudio = audio => { //Documentación del objeto audio: https://www.developphp.com/lib/JavaScript/Audio
    const clone = audio.cloneNode();//cloneNode sirve para crear una copia en este caso de audio, osea que ahora la constante clone tiene exactamente lo mismo que audio
    clone.play();
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.6), 800);
    setTimeout(() => (clone.volume = 0.4), 1200);
    setTimeout(() => (clone.volume = 0.2), 1600);
    setTimeout(() => (clone.volume = 0), 2000);
};

// C4
const C4Key = document.querySelector(".C4-key"); //Chupar el botón especificado
const playC4 = () => {
    reproducirAudio(C4); //Pos reproducir C4
    C4Key.classList.add("pulsada");//Editar el CSS para el efecto de pulsación
    setTimeout(() => C4Key.classList.remove("pulsada"), 200); //Devolver el CSS a como estaba
};
C4Key.addEventListener("click", playC4);

// Db4
const Db4Key = document.querySelector(".Db4-key");
const playDb4 = () => {
    reproducirAudio(Db4);
    Db4Key.classList.add("pulsada");
    setTimeout(() => Db4Key.classList.remove("pulsada"), 200);
};
Db4Key.addEventListener("click", playDb4);

// D4
const D4Key = document.querySelector(".D4-key");
const playD4 = () => {
    reproducirAudio(D4);
    D4Key.classList.add("pulsada");
    setTimeout(() => D4Key.classList.remove("pulsada"), 200);
};
D4Key.addEventListener("click", playD4);

// Eb4
const Eb4Key = document.querySelector(".Eb4-key");
const playEb4 = () => {
    reproducirAudio(Eb4);
    Eb4Key.classList.add("pulsada");
    setTimeout(() => Eb4Key.classList.remove("pulsada"), 200);
};
Eb4Key.addEventListener("click", playEb4);

// E4
const E4Key = document.querySelector(".E4-key");
const playE4 = () => {
    reproducirAudio(E4);
    E4Key.classList.add("pulsada");
    setTimeout(() => E4Key.classList.remove("pulsada"), 200);
};
E4Key.addEventListener("click", playE4);

// F4
const F4Key = document.querySelector(".F4-key");
const playF4 = () => {
    reproducirAudio(F4);
    F4Key.classList.add("pulsada");
    setTimeout(() => F4Key.classList.remove("pulsada"), 200);
};
F4Key.addEventListener("click", playF4);

// Gb4
const Gb4Key = document.querySelector(".Gb4-key");
const playGb4 = () => {
    reproducirAudio(Gb4);
    Gb4Key.classList.add("pulsada");
    setTimeout(() => Gb4Key.classList.remove("pulsada"), 200);
};
Gb4Key.addEventListener("click", playGb4);

// G4
const G4Key = document.querySelector(".G4-key");
const playG4 = () => {
    reproducirAudio(G4);
    G4Key.classList.add("pulsada");
    setTimeout(() => G4Key.classList.remove("pulsada"), 200);
};
G4Key.addEventListener("click", playG4);

// Ab4
const Ab4Key = document.querySelector(".Ab4-key");
const playAb4 = () => {
    reproducirAudio(Ab4);
    Ab4Key.classList.add("pulsada");
    setTimeout(() => Ab4Key.classList.remove("pulsada"), 200);
};
Ab4Key.addEventListener("click", playAb4);

// A4
const A4Key = document.querySelector(".A4-key");
const playA4 = () => {
    reproducirAudio(A4);
    A4Key.classList.add("pulsada");
    setTimeout(() => A4Key.classList.remove("pulsada"), 200);
};
A4Key.addEventListener("click", playA4);

// Bb4
const Bb4Key = document.querySelector(".Bb4-key");
const playBb4 = () => {
    reproducirAudio(Bb4);
    Bb4Key.classList.add("pulsada");
    setTimeout(() => Bb4Key.classList.remove("pulsada"), 200);
};
Bb4Key.addEventListener("click", playBb4);

// B4
const B4Key = document.querySelector(".B4-key");
const playB4 = () => {
    reproducirAudio(B4);
    B4Key.classList.add("pulsada");
    setTimeout(() => B4Key.classList.remove("pulsada"), 200);
};
B4Key.addEventListener("click", playB4);

// C5
const C5Key = document.querySelector(".C5-key");
const playC5 = () => {
    reproducirAudio(C5);
    C5Key.classList.add("pulsada");
    setTimeout(() => C5Key.classList.remove("pulsada"), 200);
};
C5Key.addEventListener("click", playC5);

// Db5
const Db5Key = document.querySelector(".Db5-key");
const playDb5 = () => {
    reproducirAudio(Db5);
    Db5Key.classList.add("pulsada");
    setTimeout(() => Db5Key.classList.remove("pulsada"), 200);
};
Db5Key.addEventListener("click", playDb5);

// D5
const D5Key = document.querySelector(".D5-key");
const playD5 = () => {
    reproducirAudio(D5);
    D5Key.classList.add("pulsada");
    setTimeout(() => D5Key.classList.remove("pulsada"), 200);
};
D5Key.addEventListener("click", playD5);

// Eb5
const Eb5Key = document.querySelector(".Eb5-key");
const playEb5 = () => {
    reproducirAudio(Eb5);
    Eb5Key.classList.add("pulsada");
    setTimeout(() => Eb5Key.classList.remove("pulsada"), 200);
};
Eb5Key.addEventListener("click", playEb5);

// E5
const E5Key = document.querySelector(".E5-key");
const playE5 = () => {
    reproducirAudio(E5);
    E5Key.classList.add("pulsada");
    setTimeout(() => E5Key.classList.remove("pulsada"), 200);
};
E5Key.addEventListener("click", playE5);

window.addEventListener("keydown", ({ keyCode }) => {
    
    //Usar https://keycode.info para asignar teclas
    
    // A
    if (keyCode === 65)
        return playC4();

    // W
    if (keyCode === 87)
        return playDb4();

    // S
    if (keyCode === 83)
        return playD4();

    // E
    if (keyCode === 69)
        return playEb4();

    // D
    if (keyCode === 68)
        return playE4();

    // F
    if (keyCode === 70)
        return playF4();

    // T
    if (keyCode === 84)
        return playGb4();

    // G
    if (keyCode === 71)
        return playG4();

    // Y
    if (keyCode === 89)
        return playAb4();

    // H
    if (keyCode === 72)
        return playA4();

    // U
    if (keyCode === 85)
        return playBb4();

    // J
    if (keyCode === 74)
        return playB4();

    // K
    if (keyCode === 75)
        return playC5();

    // O
    if (keyCode === 79)
        return playDb5();

    // L
    if (keyCode === 76)
        return playD5();

    // P
    if (keyCode === 80)
        return playEb5();

    // Ñ de ARRIBA ESPAÑA!!
    if (keyCode === 192)
        return playE5();
}); 