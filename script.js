const toggleButton = document.getElementById("theme-toggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "D";
}

toggleButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        toggleButton.textContent = "D";
        localStorage.setItem("theme", "dark");
    }else{
        toggleButton.textContent = "L";
        localStorage.setItem("theme", "light");
    }

});
