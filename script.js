const audio = document.getElementById('audio');
const mouth = document.getElementById('mouth');
let animationFrameId;
let isPlaying = false;
let time = 0;

const playAudio = () => {
  if (audio.paused) {
    audio.play();
    isPlaying = true;
    time = 0;
    animate();
  } else {
    audio.pause();
    isPlaying = false;
    cancelAnimationFrame(animationFrameId);
    mouth.style.transform = 'translateY(0px)';
  }
}

const animate = () => {
  if (!isPlaying) return;

  const baseMovement = (Math.sin(time) * 3) + 3.5;

  const randomness = (Math.random() - 0.5) * 0.5;

  const movement = baseMovement + randomness;
  mouth.style.transform = `translateY(${movement}px)`;

  time += 0.03;

  animationFrameId = requestAnimationFrame(animate);
}

audio.addEventListener('pause', () => {
  isPlaying = false;
  cancelAnimationFrame(animationFrameId);
  mouth.style.transform = 'translateY(0px)';
});
