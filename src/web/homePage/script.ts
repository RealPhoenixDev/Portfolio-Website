




function showNavbar() {
    const navbar = document.getElementById("navbar")
    console.log(navbar?.className)
    if (navbar?.className.includes(" flex ")) {
        navbar.className = navbar?.className.replace("flex ", 'hidden ')
    } else if (navbar?.className.includes(" hidden ")){
        navbar.className = navbar?.className.replace("hidden ", 'flex ')
    }
}