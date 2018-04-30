'use strict';

var expect = require('chai').expect;
const Lionshare = require('../index');

describe('#Lionshare API', () => {
  it('should get coin prices', async () => {
    const client = new Lionshare();
    var response = await client.getPrices('hour');
    expect(response).to.be.an('object');
    expect(response['data']).to.be.an('object');
  });

  it('should get coin markets', async () => {
    const client = new Lionshare();
    var response = await client.getMarkets();
    expect(response).to.be.an('object');
    expect(response['data']).to.be.an('object');
  });
});