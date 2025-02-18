document.addEventListener("DOMContentLoaded", () => {
    const mobileBtn = document.getElementById("mobile_btn");
    const mobileMenu = document.getElementById("mobile_menu");
    const icon = mobileBtn.querySelector("i");

    mobileBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        icon.classList.toggle("fa-x");
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll("#mobile_nav_list .nav-item");

    // Obtém a URL atual da página removendo query strings e hashes
    const currentPath = window.location.pathname.split("/").pop();

    // Aplica a classe .active ao item correspondente ao link da página
    navItems.forEach(item => {
        const link = item.querySelector("a").getAttribute("href").split("/").pop();

        if (currentPath === link || (currentPath === "" && link === "index.html")) {
            item.classList.add("active");
        }
    });

    // Adiciona evento de clique para trocar a classe active
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(nav => nav.classList.remove("active"));
            item.classList.add("active");
        });
    });
});
