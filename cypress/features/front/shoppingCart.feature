Feature: Validación funcionalidad del carrito de compras en Swag Labs

  @PASS
  Scenario:TC-SHOPPING-001 realizar una compra exitosa de un producto
    Given que estoy en la pagina de login de Swag Labs
    When ingreso el username "<userName>" y password "<password>"
    Then deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    When agrego el producto "<productName>" al carrito de compras
    Then el producto "<productName>" deberia ser agregado al carrito de compras exitosamente
    When ingreso el nombre "<name>", apellido "<lastName>" y codigo postal "<postalCode>" para realizar el checkout
    Then la compra del producto "<productName>" deberia ser realizada exitosamente
    Examples:
      | userName       | password       | productName         | name    | lastName  | postalCode |
      | standard_user  | secret_sauce   | Sauce Labs Backpack | Matias  | Murua     | 500        |

  @PASS
  Scenario:TC-SHOPPING-002 realizar una compra exitosa de multiples productos
    Given que estoy en la pagina de login de Swag Labs
    When ingreso el username "<userName>" y password "<password>"
    Then deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    When agrego los productos "<productName1>", "<productName2>" y "<productName3>" al carrito de compras
    Then los productos "<productName1>", "<productName2>" y "<productName3>" deberian ser agregados al carrito de compras exitosamente
    When ingreso el nombre "<name>", apellido "<lastName>" y codigo postal "<postalCode>" para realizar el checkout
    Then la compra de los productos "<productName1>", "<productName2>" y "<productName3>" deberia ser realizada exitosamente
    Examples:
      | userName      | password      | productName1        | productName2            | productName3       | name    | lastName  | postalCode |
      | standard_user | secret_sauce  | Sauce Labs Backpack | Sauce Labs Bolt T-Shirt |Sauce Labs Onesie   | Matias  | Murua     | 500        |

  @PASS
  Scenario:TC-SHOPPING-003 Eliminar un producto del carrito de compras
    Given que estoy en la pagina de login de Swag Labs
    When ingreso el username "<userName>" y password "<password>"
    Then deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    When agrego el producto "<productName>" al carrito de compras
    Then el producto "<productName>" deberia ser agregado al carrito de compras exitosamente
    Then elimino el producto "<productName>" del carrito de compras
    Then el producto "<productName>" deberia ser eliminado del carrito de compras exitosamente
    Examples:
      | userName       | password       | productName          |
      | standard_user  | secret_sauce   | Sauce Labs Backpack  |
  
  @PASS
  Scenario:TC-SHOPPING-006 Checkout con campos obligatorios vacíos
    Given que estoy en la pagina de login de Swag Labs
    When ingreso el username "<userName>" y password "<password>"
    Then deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    When agrego el producto "<productName>" al carrito de compras
    Then el producto "<productName>" deberia ser agregado al carrito de compras exitosamente
    When intento realizar checkout con campos obligatorios vacios
    Then verifico que se muestre el mensaje de error "Error: First Name is required"
    Examples:
      | userName       | password       | productName         |
      | standard_user  | secret_sauce   | Sauce Labs Backpack |