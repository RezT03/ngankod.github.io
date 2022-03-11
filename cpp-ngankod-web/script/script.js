const menu = document.querySelector(".menus"),
    materi = document.querySelector(".materi");
menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    materi.classList.toggle("active");
});