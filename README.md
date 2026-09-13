# Swag Labs - Automatización E2E con Cypress

[![Cypress E2E Tests](https://github.com/matiasmurua1/Ecommerce-swag-labs/actions/workflows/cypress.yml/badge.svg)](https://github.com/matiasmurua1/Ecommerce-swag-labs/actions/workflows/cypress.yml)

Proyecto de automatización de pruebas End-to-End sobre [Swag Labs](https://www.saucedemo.com/). La suite valida flujos críticos de autenticación, carrito de compras y checkout mediante Cypress, Cucumber y el patrón Page Object Model.

El objetivo del repositorio es aplicar buenas prácticas de automatización y mantener una ejecución repetible tanto de forma local como en integración continua con GitHub Actions.

## Tecnologías

- Cypress 15
- JavaScript
- Cucumber / Gherkin
- `@badeball/cypress-cucumber-preprocessor`
- esbuild
- Page Object Model (POM)
- GitHub Actions

## Cobertura funcional

La suite contiene 7 escenarios parametrizados que generan 10 ejecuciones de prueba.

| Módulo | ID | Validación |
| --- | --- | --- |
| Login | TC-LOGIN-001 | Inicio de sesión exitoso con diferentes tipos de usuario |
| Login | TC-LOGIN-002 | Mensaje de error para un usuario bloqueado |
| Login | TC-LOGIN-003 | Mensaje de error con usuario o contraseña incorrectos |
| Shopping Cart | TC-SHOPPING-001 | Compra exitosa de un producto |
| Shopping Cart | TC-SHOPPING-002 | Compra exitosa de múltiples productos |
| Shopping Cart | TC-SHOPPING-003 | Eliminación de un producto del carrito |
| Checkout | TC-SHOPPING-006 | Validación de campos obligatorios vacíos |

Los escenarios utilizan `Scenario Outline` y tablas `Examples` para ejecutar distintas combinaciones de datos sin duplicar pasos.

## Estrategia de tags

Los casos están agrupados por funcionalidad:

- `@login`: escenarios de autenticación.
- `@shoppingCart`: escenarios de carrito y checkout.

Ejemplo de ejecución por tag:

```bash
npx cypress run --env tags="@login"
npx cypress run --env tags="@shoppingCart"
```

## Estructura del proyecto

```text
ecommerce-swag-labs/
├── .github/
│   └── workflows/
│       └── cypress.yml                 # Pipeline de integración continua
├── cypress/
│   ├── features/
│   │   └── front/
│   │       ├── login.feature           # Escenarios de autenticación
│   │       └── shoppingCart.feature    # Escenarios de carrito y checkout
│   ├── pages/
│   │   ├── checkoutOverviewPage.js
│   │   ├── homePage.js
│   │   ├── loginPage.js
│   │   ├── yourCartPage.js
│   │   └── yourInformationPage.js
│   ├── plugins/
│   │   └── generateReport.js
│   ├── steps_definitions/
│   │   └── front/
│   │       ├── common.js               # Steps compartidos
│   │       └── shoppingCart.js         # Steps de compra
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .cypress-cucumber-preprocessorrc.json
├── cypress.config.js
├── package.json
└── README.md
```

## Decisiones de diseño

### BDD con Cucumber

Los criterios de aceptación se expresan en Gherkin con pasos `Given`, `When` y `Then`. Esto permite separar la intención funcional de la implementación técnica y facilita la lectura de los casos.

### Page Object Model

Los selectores y acciones de cada pantalla se encapsulan en objetos de página. Las definiciones de pasos consumen estos objetos y concentran la lógica del flujo de negocio.

### Parametrización

Los `Scenario Outline` utilizan tablas `Examples` para ampliar la cobertura con diferentes usuarios, credenciales, productos y datos de checkout.

### Evidencias

La configuración genera automáticamente:

- Reporte JSON: `cypress/reports/json/cucumber-report.json`.
- Mensajes Cucumber: `cypress/reports/messages/messages.ndjson`.
- Reporte HTML: `cypress/reports/html/cucumber-report.html`.
- Screenshots cuando una prueba falla.

Los reportes, screenshots y demás archivos generados se excluyen del control de versiones.

## Prerrequisitos

- Node.js 22 recomendado, para mantener paridad con el pipeline de CI.
- npm.
- Git.

Cypress incluye Electron, por lo que Chrome no es obligatorio para la ejecución predeterminada.

## Instalación

Clonar el repositorio e instalar las dependencias desde la raíz:

```bash
git clone https://github.com/matiasmurua1/Ecommerce-swag-labs.git
cd Ecommerce-swag-labs
npm ci
```

## Ejecución de pruebas

```bash
# Suite completa en modo headless
npm test

# Suite completa en Electron, igual que en CI
npm run test:ci

# Interfaz interactiva de Cypress
npm run test:open

# Ejecución con generación de reportes Cucumber
npm run test:report
```

## Configuración principal

La configuración de Cypress define:

- URL base: `https://www.saucedemo.com`.
- Features: `cypress/features/**/*.feature`.
- Screenshots automáticos ante fallos.
- Dos reintentos en modo headless y ninguno en modo interactivo.
- Ejecución sin video.
- Preprocesamiento de Gherkin mediante Cucumber y esbuild.

## Integración continua

El workflow `Cypress E2E Tests` se ejecuta automáticamente con cada `push` y `pull_request`.

El pipeline:

1. Descarga el repositorio.
2. Configura Node.js 22 sobre Ubuntu 24.04.
3. Instala las dependencias y ejecuta Cypress en Electron.
4. Publica reportes y screenshots como artefactos, incluso cuando falla una prueba.

Las evidencias se conservan durante 14 días. Además, las ejecuciones anteriores de la misma rama se cancelan cuando un cambio más reciente inicia un nuevo pipeline.

## Roadmap

- Seleccionar productos dinámicamente a partir del nombre recibido por el escenario.
- Incorporar suites `@smoke` y `@regression`.
- Agregar validación estática con ESLint al pipeline.
- Ampliar la cobertura con pruebas de API.
- Evaluar una matriz de ejecución cross-browser.
- Analizar y reducir posibles pruebas inestables antes de depender de reintentos.

## Recursos

- [Documentación de Cypress](https://docs.cypress.io/)
- [Referencia de Gherkin](https://cucumber.io/docs/gherkin/reference/)
- [Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Cypress GitHub Action](https://github.com/cypress-io/github-action)

## Autor

**Matías Nahuel Murua Martínez**

Email: murua.matias.96@gmail.com
