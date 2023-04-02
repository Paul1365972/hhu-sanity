(function () {
  const url = new URL(window.location.href);
  const searchParams = url.searchParams;
  if (searchParams.get("P.vx") !== "kurz")
   return;
  searchParams.set('P.vx', 'mittel');
  url.search = searchParams.toString();

  fetch(url)
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    console.log("Parsed");


    const notes = doc.querySelectorAll("tr > td.notiz");

    let modified = 0;

    notes.forEach(e => {
      if (/online/i.test(e.textContent)) {
        const name = e.parentElement.parentElement.querySelector("tr > td.klein > a.ver").getAttribute('title');

        // Maybe replace this by relative instead of matching by title, but this approach does not desync which is nice
        const parallels = document.querySelectorAll(`tbody:nth-child(1) > tr > td.klein > a.ver[title='${name}'`);
        parallels.forEach(p => {
          p.classList.add("hhu-sanity-online");
        });
      }
    })
    console.log(`[LSF Online Marker] Marked ${modified} elements as online`);
  })
  .catch(error => console.error(error));
}())
