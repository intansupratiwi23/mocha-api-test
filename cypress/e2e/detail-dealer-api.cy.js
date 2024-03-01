const chai = require('chai');
const { describe, it } = require('mocha');
const expect = chai.expect;

describe('GET Detail Dealer', () => {
  it('should get and display details of dealer ', () => {
    cy.request({
      method: 'GET',
      url: 'https://defi-user-service.staging.mofi.id/ecosystem/crm/md/9f7926d6-b782-48e1-832d-c92f28c0dc3f',
      headers: {
        Authorization: 'Bearer 91509b1f-4025-4151-b329-afab47a09ace',
      },
    }).then((response) => {
      expect(response.status).to.equal(200);

      console.log('Detail Data:');
      console.log(response.body);
      cy.log(JSON.stringify(response.body));
    });
  });
});