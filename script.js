// Partikeleffekt
document.addEventListener('DOMContentLoaded', function() {

    // Kontrollera om det är en desktop-enhet (bredare än 1024px)
    const isDesktop = window.innerWidth > 1024;

    // Skapa stjärnan och glow-effekten ENDAST på desktop
    let cursorStar, glowStar;

    if (isDesktop) {
        cursorStar = document.createElement('img');
        glowStar = document.createElement('img');
        
        cursorStar.src = 'star.svg';
        cursorStar.style.cssText = `
            position: fixed;
            width: 24px;
            height: 24px;
            pointer-events: none;
            z-index: 999999;
        `;
        
        glowStar.src = 'star.svg';
        glowStar.style.cssText = `
            position: fixed;
            width: 60px;
            height: 60px;
            pointer-events: none;
            z-index: 999998;
            opacity: 0.3;
            filter: blur(2px) drop-shadow(0 0 4px #7c3aed);
        `;
        
        document.body.appendChild(cursorStar);
        document.body.appendChild(glowStar);
        
        // Dölj standardmarkören
        document.body.style.cursor = 'none';
        
        const style = document.createElement('style');
        style.textContent = `
            a, button, .project-card, .tech-tag, .back-link, .project-links a {
                cursor: none;
            }
        `;
        document.head.appendChild(style);
        
        // Stjärnans position
        const starOffsetX = 12;
        const starOffsetY = 12;
        const glowOffsetX = 30;
        const glowOffsetY = 30;
        
        document.addEventListener('mousemove', (e) => {
            cursorStar.style.left = (e.clientX - starOffsetX) + 'px';
            cursorStar.style.top = (e.clientY - starOffsetY) + 'px';
            glowStar.style.left = (e.clientX - glowOffsetX) + 'px';
            glowStar.style.top = (e.clientY - glowOffsetY) + 'px';
        });
        
        document.addEventListener('mouseleave', () => {
            cursorStar.style.opacity = '0';
            glowStar.style.opacity = '0';
        });
        
        document.addEventListener('mouseenter', () => {
            cursorStar.style.opacity = '1';
            glowStar.style.opacity = '0.3';
        });
    }

});
