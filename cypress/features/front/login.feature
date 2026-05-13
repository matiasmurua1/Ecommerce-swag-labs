Feature: Validación iniciar sesion en Swag Labs

  @PASS
  Scenario:TC-LOGIN-001 Iniciar sesion con credenciales validas
    Given que estoy en la pagina de login de Swag Labs
    When ingreso el username "<userName>" y password "<password>"
    Then deberia iniciar sesion exitosamente y ser redirigido a la pagina de inicio de Swag Labs
    Examples:
      | userName       | password       |
      | standard_user  | secret_sauce   |
      | problem_user   | secret_sauce   |
      | performance_glitch_user | secret_sauce   |
      
       
  @PASS
  Scenario:TC-LOGIN-002 Login con usuario bloqueado
    Given que estoy en la pagina de login de Swag Labs
    When ingreso el username "<userName>" y password "<password>"
    Then verifico que se muestre el mensaje de error "Epic sadface: Sorry, this user has been locked out."
    Examples:
      | userName        | password       |
      | locked_out_user | secret_sauce   |

  @PASS
  Scenario: TC-LOGIN-003 Login con credenciales incorrectas
    Given que estoy en la pagina de login de Swag Labs
    When ingreso el username "<userName>" y password "<password>"
    Then verifico que se muestre el mensaje de error "Epic sadface: Username and password do not match any user in this service"
    Examples:
      | userName       | password       |
      | invalid_user   | secret_sauce   |
      | standard_user  | wrong_password |
