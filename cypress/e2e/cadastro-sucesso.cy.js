describe('Realizar cadastro com sucesso', () => {
    beforeEach(() => {
        cy.visit('/');
    })
    
    context('Verificar redirecionamento da páginade cadastro', () => {
        it('Clica no link "Cadastre-se" e redireciona para a página de cadastro da clínica', () => {
            cy.get('[href="/cadastro"]').click();
            cy.location('pathname').should('equal', '/cadastro')
        })
        })

    context('Sessão de cadastro completa', () => {
        it('Cadastrar usuário', () => {
            cy.get('[href="/cadastro"]').click();
            cy.get('[data-test="inputNome"]').type('Janaina')
            cy.get('[data-test="inputCNPJ"]').type('11111111')
            cy.get('[data-test="inputEmail"]').type('janaina@hotmail.com')
            cy.get('[data-test="inputSenha"]').type('123')
            cy.get('[data-test="inputSenhaVerificada"]').type('123')
            cy.get('.sc-bcXHqe').click()
            cy.contains('h2', 'Agora, os dados técnicos:').should('be.visible')
            cy.get('.sc-laZRCg').should('exist').should('be.visible')
            cy.get('[data-test="inputTelefone"]').type('11999999999')
            cy.get('[data-test="inputCEP"]').type('123-123')
            cy.get('[data-test="inputRua"]').type('Numero 1')
            cy.get('[data-test="inputNumero"]').type('1')
            cy.get('[data-test="inputComplemento"]').type('casa')
            cy.get('[data-test="inputEstado"]').type('SP')
            cy.contains('Cadastrar').click()
            cy.location('pathname').should('equal', '/login')
        })
    })
    
})