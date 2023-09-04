Feature: Validar producto en Libreria Nacional

    Feature Ingresar a la pagina Libreria Nacional y validar el producto

    Scenario: Producto en Libreria Nacional

    Given que me encuentro en la pagina de inicio
    When doy clic al boton Join Today
    And me direcciona a la pagina solicitada
    And lleno los campos
    And doy clic en el boton para finalizar el registro
    Then se visualiza mensaje de bievenida