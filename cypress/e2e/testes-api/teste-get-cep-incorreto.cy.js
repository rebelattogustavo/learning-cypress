describe('Verifica GET incorreto', () => {
    it('Get com CEP incorreto', () => {
        cy.request({
            method: 'GET',
            url: 'localhost:8085/endereco/cep/8925374',
            failOnStatusCode: false // para receber resposta com erro
        }).then(response => {
            expect(response.status).to.eq(400);
        });
    });
});