const LiveCoin = require('./index');
const client = new Lionshare();

var response = client.getPrices('hour');
console.log(response);

var response = client.getMarkets();
console.log(response);