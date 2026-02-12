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

    let records = readRecordsFeomTable(tobody);

add_btn.addEventListener("click", async (e) => {

    const date = (dateE1.valume || "").trim();
    const min = (minE1.value);
    const max = (minE1.value);

    const err = validateInput(date,min.max);
    if (err) {
        alert(err);
        return;
    }

    const newRecoed = {date,min,max};
});


//Palīgfunkcijas
function validateInput(date,min,max) {
    if (!date) return "Lūdzu ievadi datumu.";
    if (Number.isNaN(min)) return "Lūdzu ievadi minimālo temperatūru";
    if (min > max) return "Minimāla temperatūra nevar but lielāka par maksimālo";
return null;
}

function calcDayAvg(min,max) {
    return (min + max) / 2
}


 function readRecordsFeomTable(tbodyE1) {
    const rows = Array.from(tbodyE1.querySelectorAll("tr"));

    const out = [];
    for (const row of rows) {
        const tds = row.querySelectorAll("td");
        if (tds.length < 3) continue;
        const date = (tds[0].textContent || "").trim();
        const min = parseFloat((tds[1].textContent || "").replace(",","."));
        const max = parseFloat((tds[2].textContent || "").replace(",","."));
        if (!date || Number.isNaN(min) || Number.isNaN(max)) continue; 
        out.push({date,min,max});
    }
    return out;
 }   

})