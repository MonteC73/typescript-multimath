/// <reference path="result.ts" />

class Scoreboard {
    private results: Result[] = [];

    addResult(newResult: Result): void {
        this.results.push(newResult);
    }

    updateScoreboard(): void {
        
        let output: string = '<h2>Scoreboardsdfs</h2>';

        for(let index = 0; index < this.results.length; index++) {
            let result: Result = this.results[index];
            output += '<h4>';
            output += result.playerName + ': ' + result.score + '/' + result.problemCount + ' for factor ' + result.factor;
            output += '</h4>';
        }

        let scoresElement: HTMLElement = document.getElementById('scores')!;
        scoresElement.innerHTML = output;
    }
}