const axios = require('axios')
const colors = require('colors')

class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = '';
    }

    async getPriceData(coinOption, currOption) {
        try {
            const res = await axios.get(`${this.baseUrl}`);

            let output = '';

            res.data.array.forEach(coin => {
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${coin.price.green} |
                 Rank: ${coin.rank.blue}\n`;
            });

            return output;

        } catch (err) {
            console.error(err);
        }
    }
}

module.exports = CryptoAPI;