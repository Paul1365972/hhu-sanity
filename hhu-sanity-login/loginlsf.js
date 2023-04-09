(function () {
    let nameInput = document.querySelector('#asdf');
    let passwdInput = document.querySelector('#fdsa')
    let submitButton = document.querySelector('#loginForm\\:login');

    if (!nameInput || !passwdInput || !submitButton) {
        let loginbtn = document.querySelector("a[href*='lsf.hhu.de/qisserver/rds?state=wlogin&login=in']");
        if (loginbtn) {
            let url = new URL(loginbtn.href);
            url.searchParams.set("topitem", "functions");
            console.log("[LSF Autologin] Redirecting to login page");
            window.location.replace(url);
            //loginbtn.click();
        } else {
            console.log("[LSF Autologin] Could not find login fields");
        }
        return;
    } else {
        const btns = Array.from(document.querySelectorAll('#makronavigation > ul > li > a'));
        const schedulebtn = btns.find(a => a.textContent.includes('Stundenplan'));
        if (schedulebtn) {
            console.log("[LSF Autologin] Found login fields, but also schedule button");
            schedulebtn.click();
            return;
        }
    }

    let autofilled = true;

    function onUserInput(e) {
        if (("inputType" in e && e.inputType !== 'insertReplacementText') || "data" in e) {
            console.log("[LSF Autologin] Autologin cancelled because of user input");
            autofilled = false;
        }
    }

    function onInputAutofill(e) {
        console.log(e.animationName);
        switch (e.animationName) {
            case "onautofillstart":
                console.log("[LSF Autologin] Autofill detected");
                autofilled = true;
                checkIfAutofilled();
                break;
            case "onautofillcancel":
                console.log("[LSF Autologin] Autofill stop detected");
                autofilled = false;
                break;
        }
    }

    function checkIfAutofilled() {
        if (autofilled && nameInput.value.length > 0 && passwdInput.value.length > 0) {
            console.log("[LSF Autologin] Logging in");
            submitButton.click();
        }
    }

    nameInput.addEventListener('animationstart', onInputAutofill);
    passwdInput.addEventListener('animationstart', onInputAutofill);

    nameInput.addEventListener('change', checkIfAutofilled);
    passwdInput.addEventListener('change', checkIfAutofilled);

    nameInput.addEventListener('input', onUserInput);
    passwdInput.addEventListener('input', onUserInput);

    checkIfAutofilled();
}())
