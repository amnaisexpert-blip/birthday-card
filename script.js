// Jaise hi page load hoga, pehle fireworks chalenge
window.addEventListener('DOMContentLoaded', () => {
    startFireworks();
});

function nextSection(sectionNumber) {
    // Saare sections se active class hatao
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.classList.remove('active'));

    // Target section ko active karo
    const target = document.getElementById('sec-' + sectionNumber);
    if (target) {
        target.classList.add('active');
        // Jaise hi naye section par jayenge, phir se patakhey/fireworks chalenge
        startFireworks();
    }
}

// Fireworks / Confetti Effect function
function startFireworks() {
    var duration = 1.5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 40 * (timeLeft / duration);
        
        // Dono sides se fireworks burst honge
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}