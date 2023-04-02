(function () {
  const elements = document.querySelectorAll('tr > td.klein > a.ver');
  
  elements.forEach(e => {
    const title = e.getAttribute('title');
    if (title) {
      e.textContent = title;
      e.classList.add("hhu-sanity-fix-size");
    }
  });
  console.log(`[LSF Text Fixer] Expanded text of ${elements.length} elements`);
}())
