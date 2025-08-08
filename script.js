let muted = true;
const audioBtn = document.getElementById('audio-toggle');
const iframe = document.getElementById('bg-music');

audioBtn.addEventListener('click', () => {
  muted = !muted;
  iframe.src = `https://www.youtube.com/embed/pWAP7fIwGnI?autoplay=1&loop=1&mute=${muted ? '1' : '0'}&playlist=pWAP7fIwGnI`;
  audioBtn.textContent = muted ? '🔇' : '🔊';
});
