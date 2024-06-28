const player = document.querySelector('#player');
const img = document.querySelector('#image');
let x = 0;
let y = 0;
let angle = 0;
const key = {};
let d = 10;

document.addEventListener('keydown', function(e){
    key[e.key] = true;
});

document.addEventListener('keyup', function(e){
    delete key[e.key];
});

function updatePos() {
    if (key['w']) {
        y -= d;
        img.src = 'Player.png';
    }
    if (key['s']) {
        y += d;
        img.src = 'PlayerDown.png'; 
    }
    if (key['a']) {
        x -= d;
        img.src = 'PlayerLeft.png'; 
    }
    if (key['d']) {
        x += d;
        img.src = 'PlayerRight.png';
    }

    if (y < -450) {
        y = -450;
    }
    if (x < -930) {
        x = -930;
    }
    if (y > 450) {
        y = 450;
    }
    if (x > 930) {
        x = 930;
    }

    player.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(updatePos);
}

updatePos();
