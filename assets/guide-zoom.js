/* 안내 카드 이미지 크게 보기 — .guide-open 버튼과 .guide-lb 상자를 잇는다 (2026-11-28) */
(function () {
  var lb = document.getElementById('guide-lb');
  if (!lb) return;
  var lbImg = lb.querySelector('img');
  var opener = null;

  function open(btn) {
    var img = btn.querySelector('img');
    if (!img) return;
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt;
    opener = btn;
    lb.classList.add('open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lb.focus();
  }
  function close() {
    lb.classList.remove('open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (opener) opener.focus();
  }

  Array.prototype.forEach.call(document.querySelectorAll('.guide-open'), function (btn) {
    btn.addEventListener('click', function () { open(btn); });
  });
  lb.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lb.classList.contains('open')) close();
  });
})();
