// script.js

// Khi trang đã tải xong
document.addEventListener('DOMContentLoaded', () => {
  // Điều chỉnh âm lượng nhạc nền
  const audio = document.getElementById('background-music');
  if (audio) {
    audio.volume = 0.5; // Âm lượng 50%
  }
});

// Hiển thị popup trò chơi
function showGame() {
  const gameSection = document.getElementById('game-section');
  gameSection.classList.add('active');
}

// Đóng popup trò chơi
function closeGame() {
  const gameSection = document.getElementById('game-section');
  gameSection.classList.remove('active');
}

// Hiển thị popup lời nhắn
function showMessage() {
  const messageSection = document.getElementById('message-section');
  messageSection.classList.add('active');
}

// Đóng popup lời nhắn
function closeMessage() {
  const messageSection = document.getElementById('message-section');
  messageSection.classList.remove('active');
}
