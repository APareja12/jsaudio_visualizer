const microphone = new Microphone();

function animate(){
    if (microphone.initialized){
        const samples = microphone.getSamples();
        console.log(samples)
    }
    requestAnimationFrame(animate);
}
animate();