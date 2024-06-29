function showNavbar() {
    var navbar = document.getElementById("navbar");
    console.log(navbar === null || navbar === void 0 ? void 0 : navbar.className);
    if (navbar === null || navbar === void 0 ? void 0 : navbar.className.includes(" flex ")) {
        navbar.className = navbar === null || navbar === void 0 ? void 0 : navbar.className.replace("flex ", 'hidden ');
    }
    else if (navbar === null || navbar === void 0 ? void 0 : navbar.className.includes(" hidden ")) {
        navbar.className = navbar === null || navbar === void 0 ? void 0 : navbar.className.replace("hidden ", 'flex ');
    }
}
