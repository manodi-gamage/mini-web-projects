const classReset = () => {
    document.querySelector(".overlay-name-config").classList.add("hidden");
    document.querySelector(".backdrop").classList.add("hidden");
    document.querySelector(".game-board-container").classList.add("hidden");
    document.querySelector(".game-over").classList.add("hidden");
};

const openPlayerConfig = (event) => {
    playerConfigModalElement.classList.remove("hidden");
    backdropElement.classList.remove("hidden");

    selectedPlayerId = event.target.dataset.playerid;
};

const closePlayerConfig = () => {
    playerConfigModalElement.classList.add("hidden");
    backdropElement.classList.add("hidden");

    clearForm();
};

const confirmEdit = (event) => {
    event.preventDefault();
    const enteredPlayerName = formElement.querySelector("input").value.trim();

    if (!enteredPlayerName) {
        formElement.classList.add("error");
        formElement.querySelector("label").textContent = "Player name can't be empty";
        return;
    }

    players[selectedPlayerId - 1].name = enteredPlayerName;
    document.querySelector(`#player-${selectedPlayerId} h3`).textContent = enteredPlayerName;

    closePlayerConfig();
    clearForm();
};

const clearForm = () => {
    formElement.querySelector("input").value = "";
    formElement.classList.remove("error");
    formElement.querySelector("label").textContent = "Player Name";
};
