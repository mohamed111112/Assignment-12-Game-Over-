export class Game {

    constructor(gameid) {
        this.gameid = gameid
    }

    getAPIReady() {
        return `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gameid}`
    }

    async getGameDetails() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '078bc2fc36mshc0454c74a285195p1d0b1djsn5cbd85820726',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        const response = await fetch(this.getAPIReady(), options)
        const result = await response.json();
        return result;
    };


}

