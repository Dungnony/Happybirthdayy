let password = "";
const correctPassword = "07082006";
const passwordInput = document.getElementById("password");

function addNumber(number) {
  if (password.length < 10) {
    password += number;
    passwordInput.value = password;
    passwordInput.classList.add("active");
  }
}

function clearPassword() {
  password = "";
  passwordInput.value = password;
  passwordInput.classList.remove("active");
}

function showThongBao(message, type = "info") {
  const tb = document.createElement("div");
  tb.className = `thongbao ${type}`;
  tb.textContent = message;
  document.body.appendChild(tb);


  setTimeout(() => {
    tb.classList.add("hide");
    setTimeout(() => tb.remove(), 500);
  }, 1500);
}

function checkPassword() {
  if (password === correctPassword) {
    showThongBao(" Mật khẩu đúng! Chuẩn bị đón bất ngờ nè!", "success");
    setTimeout(() => {
      window.location.href = "Flower.html";
    }, 1000);
  } else {
    passwordInput.classList.add("shake");
    setTimeout(() => {
      passwordInput.classList.remove("shake");
      showThongBao("❌ Mật khẩu sai! Vui lòng thử lại.", "error");
      clearPassword();
    }, 500);
  }
}

function createHeartEffects() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart-particle");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.top = `${Math.random() * 100}vh`;
    heart.style.animationDelay = `${Math.random() * 5}s`;
    heart.style.backgroundColor = `hsl(${Math.random() * 20 + 330}, 80%, ${Math.random() * 20 + 60}%)`;
    document.body.appendChild(heart);
  }
}

window.addEventListener("load", () => {
  createHeartEffects();
});
