//your JS code here. If required.

const codes = document.querySelectorAll(".code");

// Focus on first input
codes[0].focus();

codes.forEach((code, index) => {

    // Move to next input when typing
    code.addEventListener("input", (e) => {

        if (!/^\d$/.test(e.target.value)) {
            e.target.value = "";
            return;
        }

        if (index < codes.length - 1) {
            codes[index + 1].focus();
        }

    });

    // Backspace functionality
    code.addEventListener("keydown", (e) => {

        if (e.key === "Backspace") {

            if (code.value === "" && index > 0) {
                codes[index - 1].value = "";
                codes[index - 1].focus();
            } else {
                code.value = "";
            }

        }

    });

});
