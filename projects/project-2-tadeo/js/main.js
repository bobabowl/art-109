function handleDropdownChange(level) {
    const nextDropdownId = `dropdown${level + 1}-container`;
    // Show the next dropdown if it exists
    if (document.getElementById(nextDropdownId)) {
        console.log("activated");
        document.getElementById(nextDropdownId).classList.remove("hidden");
        document.getElementById(nextDropdownId).classList.add("visible");
    }
}