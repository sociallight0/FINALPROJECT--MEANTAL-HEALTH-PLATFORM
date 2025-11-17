const API_URL = 'http://localhost:3000/api/auth';

document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  try {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userName', data.user.name);
      window.location.href = 'dashboard.html';
    } else {
      document.getElementById('loginError').textContent = data.msg || 'Login failed';
      document.getElementById('loginError').classList.remove('hidden');
    }
  } catch (err) {
    console.error(err);
  }
});

document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('regName').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  try {
    const res = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    const data = await res.json();
    if (res.ok) {
      alert('Registration successful! Please login.');
      window.location.href = 'login.html';
    } else {
      document.getElementById('registerError').textContent = data.msg;
      document.getElementById('registerError').classList.remove('hidden');
    }
  } catch (err) {
    console.error(err);
  }
});