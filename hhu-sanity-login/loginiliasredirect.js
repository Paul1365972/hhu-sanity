(function() {
    let loginbtn = document.querySelector("a[href*='ilias.hhu.de/login.php']");
    if (loginbtn) {
        console.log("[Ilias Autologin] Redirecting to login page");
        loginbtn.click();
    }
}())
