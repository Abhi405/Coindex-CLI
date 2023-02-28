const keyManager = require('../lib/KeyManager')
const CryptoAPI = require('../lib/CryptoAPI')

const check = {
    async price(cmd) {
        try {
            keyManager = new keyManager();
            const key = keyManager.getKey();

            const api = new CryptoAPI(key);

            const priceOutputData = await api.getPriceData(cmd.coin, cmd.curr);

            console.log(priceOutputData);


        } catch (err) {
            console.error(err.message.red);

        }
    }
}

module.exports = check;