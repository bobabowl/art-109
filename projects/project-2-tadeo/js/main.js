function handleDropdownChange(level) {
    const currentDropdownId = `dropdown${level}-container`;
    if (document.getElementById(currentDropdownId)) {
        document.getElementById(currentDropdownId).classList.remove("visible");
        document.getElementById(currentDropdownId).classList.add("used");
    }
    const nextDropdownId = `dropdown${level + 1}-container`;
    // Show the next dropdown if it exists
    if (document.getElementById(nextDropdownId)) {
        console.log("activated");
        document.getElementById(nextDropdownId).classList.remove("hidden");
        document.getElementById(nextDropdownId).classList.add("visible");
    }
}

function finalPrompt() {
    const currentDropdownId = `dropdown15-container`;
    if (document.getElementById(currentDropdownId)) {
        document.getElementById(currentDropdownId).classList.remove("visible");
        document.getElementById(currentDropdownId).classList.add("used");
    }
    // document.querySelector(".background").style.backgroundColor = "white"
    document.getElementById(`bg`).classList.remove("background");
    document.getElementById(`bg`).classList.add("background-alt");

}