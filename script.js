function nextScreen(screenId) {
  // すべての画面を非表示
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.classList.remove('active');
  });

  // 対象の画面を表示
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
    // 画面切り替え時にスクロールを最上部に戻す
    document.querySelector('.app-container').scrollTop = 0;
  }
}