class paginaPrincial {

    btnprincipal(){
        return cy.xpath('(//a[@class="unauthenticated-nav-bar__sign-up"])')
    }

}
export default paginaPrincial;