import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps"  

import paginaLibro from "../PageObject/paginaFormulario"
import paginaPrincial from "../PageObject/paginaPrincipal"


Given ('que me encuentro en la pagina de inicio', ()=>{

    cy.visit('https://utest.com');

})

When ('doy clic al boton Join Today',()=>{
    const botonpril = new paginaPrincial()
    botonpril.btnprincipal().click()
    cy.wait(8000)

    
})

And ('me debe direccionar a la pagina solicitada', ()=>{
    const pag = new paginaFormulario ()
    pag.LblBievenida().should('be.visible')

})

And ('lleno los campos', ()=>{
    
    const form = new paginaFormulario ()
    form.txtNombre().type(("jeraldine"))

})