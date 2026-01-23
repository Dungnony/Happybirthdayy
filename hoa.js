window.onload = () => {
 
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 2000);
  setTimeout(() => {
  
    const tb = document.createElement("div");
    tb.className = "thongbao";
    tb.innerHTML = "<p>🎉 Ehe</p>";
    document.body.appendChild(tb);

    setTimeout(() => {
      window.location.href = "sinhnhat.html";
    }, 1000);
  }, 15000);
};
