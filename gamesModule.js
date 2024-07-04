

export class Category {

    constructor(gamesCategory) {
        this.category = gamesCategory
    }


    getAPIReady() {
        return `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`
    }

    async getGames() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '078bc2fc36mshc0454c74a285195p1d0b1djsn5cbd85820726',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };


        const response = await fetch(this.getAPIReady(), options)
        const result = await response.json();

        return result
    }

}


