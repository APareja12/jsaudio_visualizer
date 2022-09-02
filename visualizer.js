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
        this.color = 'black';
        this.jumpForce = 0;
        this.fallForce = 0.1;
        this.isFalling = true;
    }

    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    fall(){
        this.jumpForce = 0;
        this.y += this.fallForce;
        this.fallForce += 0.05;
    }

    jump(){
        this.fallForce = 0;
        this.y -= this.jumpForce;
        this.jumpForce -= 0.05;
    }

}

let balls = [];
const generateBalls = () => {
    const distance = 30;
    const amountOfBalls = (canvas.width / distance) - 2;
    for (let i = 0; i < amountOfBalls; i++) {
        balls.push(new Ball(distance + (i*distance), 500))
    }
}

generateBalls();

balls.forEach(ball => {
    ball.draw();
})

function animate(){
    if (microphone.initialized){
        const samples = microphone.getSamples();
        console.log(samples)
    }
    requestAnimationFrame(animate);
}
animate();