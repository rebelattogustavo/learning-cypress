describe('Verifica GET incorreto', () => {
    it('Cadastrar rua nula', () => {
        const objetoEndereco = {
            "rua": null,
            "numero": 2500,
            "cidade": "Santa Catarina",
            "estado": "SC",
            "bairro": "Tifa Martins",
            "cep": 89253745
        };
        cy.request({
            method: 'POST',
            url: 'localhost:8085/endereco',
            body: objetoEndereco,
            failOnStatusCode: false // para receber resposta com erro
        }).then(response => {
            expect(response.status).to.eq(400);
        });
    });
});