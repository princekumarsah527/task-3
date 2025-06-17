function checkAnswer(ans) {
  const result = document.getElementById('quiz-result');
  if (ans === 'a') {
    result.textContent = '✅ Correct!';
    result.style.color = 'green';
  } else {
    result.textContent = '❌ Incorrect. Try again.';
    result.style.color = 'red';
  }
}

const images = [
  'edit image.jpg',
  'image.jpg',
  'photo.jpg'
];
let currentImg = 0;
function nextImage() {
  currentImg = (currentImg + 1) % images.length;
  document.getElementById('carousel-img').src = images[currentImg];
}

async function fetchJoke() {
  const jokeEl = document.getElementById('joke');
  jokeEl.textContent = 'Loading...';
  try {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    jokeEl.textContent = `${data.setup} — ${data.punchline}`;
  } catch (error) {
    jokeEl.textContent = '😢 Failed to fetch joke. Try again later.';
  }
}
