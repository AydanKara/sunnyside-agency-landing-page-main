function mobileMenuFunc() {
    const btnOpenMobileMenu = document.querySelector("#menu-btn");
    const mobileMenu = document.querySelector("#navbar");
    const closeMobileMenu = document.querySelector("#close-btn");
    const menuListX = document.querySelector(".bi-x-lg");

    btnOpenMobileMenu.addEventListener("click", function () {
        mobileMenu.style.display = "block";
        btnOpenMobileMenu.style.display = "none";
        closeMobileMenu.style.display = "block";
        menuListX.style.animation = "animate 0.5s alternate-reverse";
    });

    closeMobileMenu.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        btnOpenMobileMenu.style.display = "block";
        closeMobileMenu.style.display = "none";
        menuListX.style.animation = "unset";
    });

    /* click outside start */
    document.addEventListener("click", function (event) {
        if (
            !event.composedPath().includes(mobileMenu) &&
            !event.composedPath().includes(btnOpenMobileMenu)
        ) {
            mobileMenu.style.display = "none";
            btnOpenMobileMenu.style.display = "block";
            closeMobileMenu.style.display = "none";
        }
    });
    /* click outside end */
}

mobileMenuFunc();

