'use strict';

const fetch = require('node-fetch');

class Lionshare {

  constructor() {
    this.baseUrl = 'https://api.lionshare.capital/api/';
  }

  /**
   * Gets data from Lionshare API
   * @param {string} endpoint endpoint for HTTP API request 
   * @param {string=} query optional query string
   * @return {Object} JSON information
   */
  _get(endpoint, query = '') {
    return fetch(`${this.baseUrl}${endpoint}${query}`).then(res =>
      res.json()
    );
  }

  /**
   * Gets prices for cryptocurrencies
   * @param {string=} period period to get hisoric prices (hour, day, week, month, year)
   * @return {Object} JSON price information
   */
  getPrices(period = '') {
    return this._get('prices', '?period=' + period);
  }

  /**
   * Gets market info for cryptocurrencies
   * @return {Object} JSON market information
   */
  getMarkets() {
    return this._get('markets');
  }
}

module.exports = Lionshare;