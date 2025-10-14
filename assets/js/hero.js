// vna-hero.js
document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".vna-hero");
  if (!root) return;

  const subEl = root.querySelector(".vna-hero-sub");
  const titleEl = root.querySelector(".vna-hero-title");
  if (!subEl || !titleEl) return;

  const phrases = [
    { sub: "Когда психология становится живой", title: "Пути к себе, которые работают" },
    { sub: "Опора в переменах и поиске себя", title: "Каждое приложение — свой путь" },
    { sub: "Главное — всегда внутри", title: "Чувствуй, а не только понимай" }
  ];

  let index = 0;

  function typeText(el, text, speed = 55) {
    el.textContent = "";
    return new Promise((resolve) => {
      let i = 0;
      const timer = setInterval(() => {
        el.textContent += text.charAt(i);
        i++;
        if (i >= text.length) {
          clearInterval(timer);
          resolve();
        }
      }, speed);
    });
  }

  async function run() {
    const { sub, title } = phrases[index];
    await typeText(subEl, sub, 50);
    await new Promise(r => setTimeout(r, 500));
    await typeText(titleEl, title, 40);
    await new Promise(r => setTimeout(r, 4000));
    index = (index + 1) % phrases.length;
    run();
  }

  // Опционально: сразу показать первую фразу (для SEO/без "пустоты")
  // subEl.textContent = phrases[0].sub;
  // titleEl.textContent = phrases[0].title;

  run();
});
