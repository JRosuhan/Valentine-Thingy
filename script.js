let celebrationInterval = null;

// Function to switch pages
function nextPage(page) {
    if (celebrationInterval) {
        clearInterval(celebrationInterval);
        celebrationInterval = null;
        document.getElementById('celebration-layer').style.display = "none";
    }

    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    let targetPage = typeof page === "number" ? 'page' + page : page;
    document.getElementById(targetPage).classList.add('active');

    document.body.className = '';
    document.body.classList.add(targetPage + '-mode');


}

// Spawn floating emojis
function spawnEmoji() {
    const container = document.getElementById('celebration-layer');
    const emojis = ['❤️','💖','🌸','✨','🎆','💐','💛','🎖️','🦅'];

    const el = document.createElement('div');
    el.className = 'floating-emoji';
    el.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    el.style.left = Math.random() * 100 + 'vw';
    el.style.fontSize = (Math.random() * 20 + 30) + 'px';
    el.style.animationDuration = (Math.random() * 2 + 3) + 's';

    container.appendChild(el);
    setTimeout(() => el.remove(), 4000);
}

// Celebrate function
function celebrate() {
    nextPage('success');
    document.getElementById('celebration-layer').style.display = 'block';
    celebrationInterval = setInterval(spawnEmoji, 150);
}

// Traitor
function traitor() {
    document.body.classList.add('traitor-mode');
    const header = document.getElementById('header-text');
    header.style.color = '#ff1a1a';
    header.innerHTML = '<span>THREAT LEVEL: EXTREME</span><span>TRAITOR LOCATED</span>';

    nextPage('traitor');
}

// Reset all
function resetAll() {
    document.body.className = '';
    const header = document.getElementById('header-text');
    header.style.color = '';
    header.innerHTML = '<span>STRATAGEM STATUS: ACTIVE</span><span>SES LIBERTY REPRESENTATIVE</span>';

    nextPage(1);
}

// Start background music
function startMusic() {
    const music = document.getElementById('bg-music');
    music.volume = 0.01; // 20%
    music.play().catch(() => console.log("Autoplay blocked, will play on user interaction"));
}
