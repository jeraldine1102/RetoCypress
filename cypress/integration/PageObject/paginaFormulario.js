class paginaLibro {

    LblBievenida(){
        return cy.xpath('//span[contains(text(),"Tell us about yourself")]')
}

txtNombre(){
    return cy.xpath('(//input[@id="firstName"])')
}
txtApellido(){
    return cy.xpath('(//input[@id="lastName"])')
}
txtEmail(){
    return cy.xpath('(//input[@id="email"])')
}
slctMes(){
    return cy.xpath('(//select[@id="birthMonth"])')
}
slctDia(){
    return cy.xpath('(//select[@id="birthDay"])')
}
slctAño(){
    return cy.xpath('(//select[@id="birthYear"])')
}
txtlenguaje(){
    return cy.xpath('(//input[@class="ui-select-search input-xs ng-valid ng-touched ng-dirty ng-empty"])')
}
btnLocation(){
    return cy.xpath('(//a[@class="btn btn-blue"] )')
}
}
export default paginaLibro;