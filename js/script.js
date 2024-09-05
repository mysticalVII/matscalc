function updateInputs(value) {
    // Update both slider and textbox together
    document.getElementById("ur-slider").value = value;
    document.getElementById("ur-input").value = value;

    // Calculate item counts based on Ultra Rare count
    let ultraRareCount = parseInt(value);

    let commonCount = 27 * ultraRareCount;
    let rareCount = 9 * ultraRareCount;
    let superRareCount = 3 * ultraRareCount;

    // Update the output values
    document.getElementById("common-output").textContent = commonCount;
    document.getElementById("rare-output").textContent = rareCount;
    document.getElementById("superrare-output").textContent = superRareCount;

    // Also update the remaining counts
    updateRemaining();
}

function updateRemaining() {
    // Get the number of each item the user already has
    let commonHave = parseInt(document.getElementById("common-have").value);
    let rareHave = parseInt(document.getElementById("rare-have").value);
    let superRareHave = parseInt(document.getElementById("superrare-have").value);

    // Get the calculated required numbers
    let commonRequired = parseInt(document.getElementById("common-output").textContent);
    let rareRequired = parseInt(document.getElementById("rare-output").textContent);
    let superRareRequired = parseInt(document.getElementById("superrare-output").textContent);

    // Calculate the remaining amounts
    let commonRemaining = commonRequired - commonHave;
    let rareRemaining = rareRequired - rareHave;
    let superRareRemaining = superRareRequired - superRareHave;

    // Ensure the remaining values can't go negative
    commonRemaining = commonRemaining < 0 ? 0 : commonRemaining;
    rareRemaining = rareRemaining < 0 ? 0 : rareRemaining;
    superRareRemaining = superRareRemaining < 0 ? 0 : superRareRemaining;

    // Update the remaining amounts in the DOM
    document.getElementById("common-remaining").textContent = commonRemaining;
    document.getElementById("rare-remaining").textContent = rareRemaining;
    document.getElementById("superrare-remaining").textContent = superRareRemaining;
}
