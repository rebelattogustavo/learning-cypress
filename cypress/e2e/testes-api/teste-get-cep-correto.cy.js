describe('Verifica GET correto', () => {
    it('Get com CEP correto', () => {
        cy.request({
            method: 'GET',
            url: 'localhost:8085/endereco/cep/89253745',
            failOnStatusCode: false // para receber resposta com erro
        }).then(response => {
            expect(response.status).to.eq(200);
        });
    });
});