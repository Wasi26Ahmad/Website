document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("no");
    const yesButton = document.getElementById("yes");

    noButton.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    noButton.addEventListener("click", () => {
        alert("No is not acceptable... I am sad.");
    });

    yesButton.addEventListener("click", () => {
        fetch("https://formspree.io/f/manqbldk", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: "Yes clicked!" })
        }).then(() => alert("Your response has been recorded!"));
    });
});
