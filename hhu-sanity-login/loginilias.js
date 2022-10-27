(function () {
    let nameInput = document.querySelector('#username');
    let passwdInput = document.querySelector('#password')
    let submitButton = document.querySelector('input[name="cmd[doStandardAuthentication]"]');

    if (!nameInput || !passwdInput || !submitButton) {
        console.log("[Ilias Autologin] Could not find login fields");
        return;
    }

    let autofilled = true;

    function onUserInput(e) {
        if (("inputType" in e && e.inputType !== 'insertReplacementText') || "data" in e) {
            console.log("[Ilias Autologin] Autologin cancelled because of user input");
            autofilled = false;
        }
    }

    function onInputAutofill(e) {
        console.log(e.animationName);
        switch (e.animationName) {
            case "onautofillstart":
                console.log("[Ilias Autologin] Autofill detected");
                autofilled = true;
                checkIfAutofilled();
                break;
            case "onautofillcancel":
                console.log("[Ilias Autologin] Autofill stop detected");
                autofilled = false;
                break;
        }
    }

    function checkIfAutofilled() {
        if (autofilled && nameInput.value.length > 0 && passwdInput.value.length > 0) {
            console.log("[Ilias Autologin] Logging in");
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
