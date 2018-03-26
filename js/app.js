function startGame() {
    // starting new game
    var playerName = getInputValue('playername');
    logPlayer(playerName);
    postScore(100, playerName);
}
function logPlayer(name) {
    if (name === void 0) { name = 'MultiMath Player'; }
    console.log("New game starting fordf player: " + name);
}
function postScore(score, playerName) {
    if (playerName === void 0) { playerName = 'MultiMath Player'; }
    var scoreElement = document.getElementById('postedScores');
    scoreElement.innerText = score + " - " + playerName;
}
function getInputValue(elementID) {
    var inputElement = document.getElementById(elementID);
    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map