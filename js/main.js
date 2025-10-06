function toggleMenu() {
  const m = document.getElementById('menu');
  if (m) m.classList.toggle('open');
}
function goLang(sel) {
  const v = sel.value;
  if (!v) return;
  window.location.href = v;
}