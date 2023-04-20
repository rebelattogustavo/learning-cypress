describe("verificar valor", () => {
    it('valor igual a 89253745', () => {
        cy.request("GET", "localhost:8085/endereco/2").as('TodoRequest');
        cy.get('@TodoRequest').then(response => {
            expect(response.body).to.have.property('cep', 89253745);
        });
    });
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
    it('Get com CEP incorreto', () => {
        cy.request({
            method: 'GET',
            url: 'localhost:8085/endereco/cep/8925374',
            failOnStatusCode: false // para receber resposta com erro
        }).then(response => {
            expect(response.status).to.eq(400);
        });
    });
    it('Get com CEP correto', () => {
        cy.request({
            method: 'GET',
            url: 'localhost:8085/endereco/cep/89253745',
            failOnStatusCode: false // para receber resposta com erro
        }).then(response => {
            expect(response.status).to.eq(200);
        });
    });
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
    it('verificar tempo de resposta', () => {
        cy.request('GET', 'localhost:8085/endereco').then(response => {
            expect(response.duration).to.be.lessThan(20);
        });
    });
    it('verificar parâmetros de consulta', () => {
        cy.request('GET', 'localhost:8085/endereco/cep/89253745').then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('array');
        });
    });
    it('verificar manipulação de dados', () => {
        cy.request({
            method: 'PUT',
            url: 'localhost:8085/endereco/2',
            headers: {
                'Authorization': 'Bearer <TOKEN>'
            },
            body: {
                rua: "Rua Francisco Hruschka",
                numero: 2500,
                cidade: "Santa Catarina",
                estado: "SC",
                bairro: "Tifa Martins",
                cep: 89253745
            }
        }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('rua').to.equal('Rua Francisco Hruschka');
            expect(response.body).to.have.property('numero').to.equal(2500);
        });
    });
    it('verificar parâmetros de consulta', () => {
        cy.request('GET', 'localhost:8085/endereco/2').then(response => {
            expect(response.status).to.equal(200);
            expect(response.body).to.be.an('object');
        });
    });
});
