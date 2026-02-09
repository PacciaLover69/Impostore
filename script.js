let bottoneInvia = document.getElementById("invia");
let inputNumPlayer = document.getElementById("numeroPlayer");
let checkIndizio = document.getElementById("checkIndizio");

bottoneInvia.addEventListener("click", () => {
    localStorage.setItem("numPlayer", inputNumPlayer.value);
    localStorage.setItem("hasHint", checkIndizio.checked);
    // console.log(checkIndizio.checked)
    window.location.href = "nomi.html"
});