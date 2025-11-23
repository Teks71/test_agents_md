const statusEl = document.getElementById('status');
const pingBtn = document.getElementById('ping');

async function sendPing() {
  try {
    const response = await window.api.ping();
    statusEl.textContent = `Ответ от main: ${response}`;
  } catch (error) {
    console.error('Ping error', error);
    statusEl.textContent = 'Ошибка связи с main-процессом';
  }
}

pingBtn.addEventListener('click', sendPing);
