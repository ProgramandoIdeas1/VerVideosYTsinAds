// --- Lógica para el Tema (Dark/Light Mode) ---

// Función para establecer el tema
function setTheme(themeName) {
    // La página 'acerca de' tiene un tema fijo, no lo cambiamos
    if (document.body.classList.contains('gamer-theme')) {
        return;
    }
    document.body.className = ''; // Limpiamos clases anteriores
    document.body.classList.add(themeName + '-mode');
    localStorage.setItem('theme', themeName); // Guarda la preferencia
}

// Función para cargar el tema al inicio de la página
function loadTheme() {
    // La página 'acerca de' tiene un tema fijo, no lo cambiamos
    if (document.body.classList.contains('gamer-theme')) {
        document.body.className = 'dark-mode gamer-theme';
        return;
    }
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        // Establecer tema por defecto basado en el sistema
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }
}

// Carga el tema cuando el DOM está listo
document.addEventListener('DOMContentLoaded', loadTheme);

