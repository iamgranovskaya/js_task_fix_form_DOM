function e(e){return e.replace(/([A-Z])/g," $1").trim()}document.querySelectorAll("input").forEach(function(t){var l,r=document.createElement("label"),n=t.getAttribute("name");t.setAttribute("placeholder",(l=e(n))[0].toUpperCase()+l.slice(1)),r.classList.add("field-label"),r.htmlFor=n,r.id=n,r.textContent=e(n),t.before(r)});
//# sourceMappingURL=index.ad4ef679.js.map
