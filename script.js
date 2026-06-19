// Partikeleffekt
document.addEventListener('DOMContentLoaded', function() {

    const cursorStar = document.createElement('img');
    const glowStar = document.createElement('img');
    
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
    
    //  partiklar funktion
    function createParticles(x, y) {
        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            const angle = (i / 8) * Math.PI * 2;
            const velocityX = Math.cos(angle) * (Math.random() * 3 + 2);
            const velocityY = Math.sin(angle) * (Math.random() * 3 + 2);
            
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #c084fc;
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                z-index: 999997;
                box-shadow: 0 0 4px #b980f0;
            `;
            document.body.appendChild(particle);
            
            let posX = x;
            let posY = y;
            let opacity = 1;
            let life = 30;
            
            function animateParticle() {
                if (life <= 0) {
                    particle.remove();
                    return;
                }
                posX += velocityX;
                posY += velocityY;
                opacity -= 0.03;
                life--;
                particle.style.left = posX + 'px';
                particle.style.top = posY + 'px';
                particle.style.opacity = opacity;
                requestAnimationFrame(animateParticle);
            }
            
            animateParticle();
        }
    }
    
    const links = document.querySelectorAll('.project-links a, .back-link, .tech-tag');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            const rect = link.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            createParticles(centerX, centerY);
            
            cursorStar.style.transform = 'scale(1.2)';
            glowStar.style.transform = 'scale(1.1)';
            glowStar.style.opacity = '0.5';
            
            setTimeout(() => {
                cursorStar.style.transform = '';
                glowStar.style.transform = '';
                glowStar.style.opacity = '0.3';
            }, 200);
        });
    });
    
    document.body.style.cursor = 'none';
    
    const style = document.createElement('style');
    style.textContent = `
        a, button, .project-card, .tech-tag, .back-link, .project-links a {
            cursor: none;
        }
    `;
    document.head.appendChild(style);
    
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
    
});
