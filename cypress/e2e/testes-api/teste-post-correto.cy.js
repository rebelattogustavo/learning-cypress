describe('Verifica POST incorreto', () => {
    it('teste post correto', () => {
        // definir objeto de endereço com CEP incorreto
        const objetoEndereco = {
            "rua": "Rua Francisco Hruschka",
            "numero": 2500,
            "cidade": "Santa Catarina",
            "estado": "SC",
            "bairro": "Tifa Martins",
            "cep": 89253745
        };
        // enviar solicitação POST com objeto de endereço incorreto e verificar resposta
        cy.request({
            method: 'POST',
            url: 'localhost:8085/endereco',
            body: objetoEndereco,
            failOnStatusCode: false // para receber resposta com erro
        }).then(response => {
            expect(response.status).to.eq(200);
        });
    });
})