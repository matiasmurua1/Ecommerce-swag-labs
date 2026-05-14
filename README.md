# Introducción

# Swag Labs - Automatización E2E
Proyecto de automatización End-to-End del módulo de compras (Login y Shopping Cart) utilizando Cypress.
Se implementa Page Object Model y estructura BDD con Cucumber.

# Índice

- [Cómo Comenzar](#cómo-comenzar)
- [Prerrequisitos](#prerrequisitos)
- [Instalación de dependencias](#instalación-de-dependencias)
- [Ejecución de tests](#ejecución-de-tests)
- [Scripts relevantes del `package.json`](#scripts-relevantes-del-packagejson)
- [Plugins recomendados](#plugins-recomendados)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Spec pattern y preprocesador](#spec-pattern-y-preprocesador)
- [Características](#características)
- [Recursos útiles](#recursos-útiles)
- [Decisiones técnicas](#decisiones-técnicas)

# Cómo Comenzar

## Prerrequisitos

- Node.js v18+
- npm v9+
- Chrome instalado
- Visual Studio Code (opcional)

## Instalación de dependencias

Clona el repositorio y desde la raíz del proyecto ejecuta:

```bash
npm install
```

Esto instalará `cypress`, el preprocesador de Cucumber, herramientas de reporte y demás dependencias listadas en `package.json`.

## Ejecución de tests

Comandos principales disponibles (definidos en `package.json`):

```bash
npm run test         # ejecuta cypress en modo headless (cypress run)
npm run test:open    # abre la UI de Cypress (cypress open)
npm run test:report  # ejecuta pruebas y genera reporte HTML
```

### Scripts relevantes del `package.json`

- `test`: ejecuta `cypress run` en modo headless.
- `test:open`: ejecuta `cypress open` para interfaz interactiva.
- `test:report`: ejecuta pruebas y genera un reporte HTML automático con Cucumber Reporter.

## Plugins recomendados

- Cucumber (Gherkin) Full Support: `alexkrechik.cucumberautocomplete`
- Cypress Helper / Snippets: `shelex.vscode-cy-helper`, `andrew-codes.cypress-snippets`
- ESLint: `dbaeumer.vscode-eslint`
- Prettier: `esbenp.prettier-vscode`
- GitLens: `eamodio.gitlens`

## Estructura del proyecto

Carpetas principales relevantes:

- `cypress/features/`: archivos `.feature` en Gherkin (tests en formato BDD).
  - `front/`: pruebas de interfaz de usuario (login, carrito de compras).
- `cypress/steps_definitions/`: definiciones de pasos (JS) mapeados al Gherkin.
  - `front/`: implementación de steps para UI.
- `cypress/pages/`: page objects (locators y helpers de UI).
- `cypress/support/`: comandos personalizados y configuración compartida.
- `jsonlogs/`: logs generados automáticamente en formato JSON y NDJSON.
- `cypress.config.js`: configuración principal de Cypress.

Estructura completa:

```
ecommerce-swag-labs/
├── cypress/
│   ├── features/                         Casos de prueba en Gherkin
│   │   ├── front/
│   │   ├── login.feature            Escenarios de autenticación
│   │   └── shoppingCart.feature     Escenarios de carrito y compra
│   │   
│   ├── pages/                            Page Object Model
│   │   ├── loginPage.js                 Elementos y acciones de login
│   │   ├── homePage.js                  Elementos y acciones de página principal
│   │   ├── yourCartPage.js              Elementos y acciones del carrito
│   │   ├── yourInformationPage.js       Elementos y acciones de información de usuario
│   │   └── checkoutOverviewPage.js      Elementos y acciones del resumen de compra
│   ├── steps_definitions/                Implementación de pasos del BDD
│   │   ├── front/
│   │   ├── common.js                Pasos comunes reutilizables
│   │   └── shoppingCart.js          Pasos de flujo de compra
│   │   
│   │
│   ├── support/                          Configuración y utilidades globales
│   │   ├── commands.js                  Comandos personalizados de Cypress
│   │   └── e2e.js                       Configuración inicial de pruebas
│   ├── plugins/                          Plugins y generadores de reportes
│   │   └── generateReport.js            Generador de reportes HTML
│   └── screenshots/                      Screenshots capturados automáticamente
│       └── front/
├── jsonlogs/                             Logs automáticos
│   ├── log.json                          Log en formato JSON
│   └── messages.ndjson                  Log en formato NDJSON
├── node_modules/                         Dependencias (ignorar en Git)
├── cypress.config.js                     Configuración de Cypress
├── .cypress-cucumber-preprocessorrc.json Configuración del preprocessor
├── cucumber-report.html                  Reporte HTML generado
├── package.json                          Dependencias y scripts
├── package-lock.json                     Lock de versiones
├── .gitignore                            Exclusiones de Git
└── README.md                             Documentación del proyecto
```

## Spec pattern y preprocesador

La configuración de Cypress utiliza:

- **specPattern**: `cypress/features/**/*.feature` para archivos Gherkin.
- **Preprocesador**: `@badeball/cypress-cucumber-preprocessor` con `esbuild` para compilar features a código ejecutable.
- **Archivo de configuración**: `cypress.config.js`.

## Características

- **Pruebas BDD con Cucumber**: Escenarios legibles en Gherkin (Given/When/Then).
- **Page Object Model**: Encapsulación de elementos y acciones de UI.
- **Reportes HTML automáticos**: Generación de reportes visuales con Cucumber Reporter.
- **Screenshots en fallos**: Captura automática de pantallas en errores.
- **Logs estructurados**: Generación de logs JSON para auditoría y debugging.
- **Validación de código**: ESLint para mantener code quality.

# Recursos útiles

- Cypress: https://docs.cypress.io
- Cucumber / Gherkin: https://cucumber.io/docs/gherkin/reference/
- Cypress Cucumber Preprocessor: https://github.com/badeball/cypress-cucumber-preprocessor
- Multiple Cucumber HTML Reporter: https://github.com/volumes/multiple-cucumber-html-reporter

# Decisiones técnicas

- **Uso de POM (Page Object Model)**: Facilita el mantenimiento del código y reutilización de locators.
- **Ejemplos en features**: Uso de `Examples` para parametrizar escenarios y validar múltiples usuarios en un mismo flujo.
- **Parametrización de steps**: Steps reutilizables y genéricos para facilitar composición de escenarios complejos.
- **Logs y Reportes**: Generación automática de logs y reportes para trazabilidad y análisis de fallos.

AUTOR: MURUA MARTINEZ MATIAS NAHUEL  
Email: murua.matias.96@gmail.com  
Versión: 1.0.0 - Mayo 2026


