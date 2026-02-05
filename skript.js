document.addEventListener("DOMContentLoaded", () => {
    const dateE1 = document.getElementById("d");
    const minE1 = document.getElementById("tmin");
    const maxE1 = document.getElementById("tmax")

    const tbody = document.querySelector("tbody");
    const avg_summary = document.getElementById("avg_all");
    const add_btn = document.querySelector("btn");

    if (!dateE1 || !minE1 || !tbody || !avg_summary || !add_btn) {
        console.warn("trūkst obligāta elementa.");
        return;
    }

})