describe('Verifica POST incorreto', () => {
    it('teste post incorreto', () => {
        // definir objeto de endereço com CEP incorreto
        const objetoEndereco = {
            "rua": "Rua José Narloch",
            "numero": 1754,
            "cidade": "Santa Catarina",
            "estado": "SC",
            "bairro": "Tifa Martins",
            "cep": 8925374
        };
        // enviar solicitação POST com objeto de endereço incorreto e verificar resposta
        cy.request({
            method: 'POST',
            url: 'localhost:8085/endereco',
            body: objetoEndereco,
            failOnStatusCode: false // para receber resposta com erro
        }).then(response => {
            expect(response.status).to.eq(400);
        });
    });
})