const microphone = new Microphone();
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Ball {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.radius = 8;
        this.color = 'white';
        this.jumpForce = 0;
        this.fallForce = 0.1;
        this.isFalling = true;
    }
}


function animate(){
    if (microphone.initialized){
        const samples = microphone.getSamples();
        console.log(samples)
    }
    requestAnimationFrame(animate);
}
animate();