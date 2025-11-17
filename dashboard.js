const API_URL = 'http://localhost:3000/api';
let moodChart;

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('token')) {
    window.location.href = 'login.html';
    return;
  }

  document.getElementById('userName').textContent = localStorage.getItem('userName') || 'User';
  loadMoodData();

  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'login.html';
  });
});

async function loadMoodData() {
  try {
    const res = await fetch(`${API_URL}/mood`, {
      headers: { 'x-auth-token': localStorage.getItem('token') }
    });
    const moods = await res.json();
    renderChart(moods);
  } catch (err) {
    console.error(err);
  }
}

function renderChart(moods) {
  const ctx = document.getElementById('moodChart').getContext('2d');
  const labels = moods.slice(0, 7).reverse().map(m => new Date(m.date).toLocaleDateString());
  const data = moods.slice(0, 7).reverse().map(m => ({ happy: 5, calm: 4, okay: 3, sad: 2, anxious: 1 }[m.mood] || 3));

  if (moodChart) moodChart.destroy();
  moodChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        label: 'Mood Level',
        data,
        borderColor: '#0d9488',
        backgroundColor: 'rgba(13, 148, 136, 0.1)',
        tension: 0.4
      }]
    },
    options: { scales: { y: { min: 0, max: 6 } } }
  });
}

function openMoodModal() {
  const mood = prompt("How are you feeling today?\n(happy, calm, okay, sad, anxious)");
  if (mood) {
    fetch(`${API_URL}/mood`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ mood: mood.toLowerCase() })
    }).then(() => loadMoodData());
  }
}

function openJournalModal() {
  const text = prompt("Write your thoughts...");
  if (text) {
    fetch(`${API_URL}/journal`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({ content: text })
    });
  }
}

function startBreathing() {
  alert("Breathe in for 4... Hold for 4... Breathe out for 6...\nRepeat 5 times. You're doing great!");
}