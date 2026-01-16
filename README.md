<div align="center">
  <h1>Front Pokedex</h1>
  <p>SPA en React + Vite para buscar y explorar Pokemon con detalle responsive.</p>
  <p>
    <a href="#-descripcion">Descripcion</a> •
    <a href="#-caracteristicas">Caracteristicas</a> •
    <a href="#-inicio-rapido">Inicio rapido</a> •
    <a href="#-arquitectura">Arquitectura</a> •
    <a href="#-api-integration--endpoints">API</a> •
    <a href="#-deployment">Deployment</a>
  </p>
  <p>
    <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React" />
    <img src="https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwindcss&logoColor=white" alt="Tailwind" />
  </p>
  <p>
    Demo: <em>No disponible</em> • API: <code>http://localhost:8080</code> • LinkedIn: <a href="https://www.linkedin.com/in/augustovillegas/">Augusto Villegas</a>
  </p>
</div>

---

## ?? Tabla de Contenidos

- [?? Descripcion](#-descripcion)
- [? Caracteristicas](#-caracteristicas)
- [?? Stack Tecnologico](#-stack-tecnologico)
- [? Inicio Rapido](#-inicio-rapido)
- [?? Arquitectura](#-arquitectura)
- [??? Estructura del Proyecto](#-estructura-del-proyecto)
- [?? Componentes / Modulos Principales](#-componentes--modulos-principales)
- [??? Validaciones](#-validaciones)
- [?? API Integration / Endpoints](#-api-integration--endpoints)
- [?? Scripts Disponibles](#-scripts-disponibles)
- [?? Variables de Entorno](#-variables-de-entorno)
- [?? Deployment](#-deployment)
- [?? Guias de Uso](#-guias-de-uso)
- [?? Personalizacion / Extension](#-personalizacion--extension)
- [?? Contribuciones](#-contribuciones)
- [?? Licencia](#-licencia)

---

## ?? Descripcion

Esta aplicacion frontend permite buscar Pokemon por nombre, listar resultados y ver el detalle seleccionado. Esta pensada para usuarios que desean explorar un catalogo de Pokemon con una UI clara y responsive. Es una SPA (Single Page Application) construida con React y Vite, y consume un API local para obtener los datos.

---

## ? Caracteristicas

- ? Busqueda por nombre con filtrado en cliente.
- ? Listado en grid responsive con cards de tamano consistente.
- ? Detalle del Pokemon en panel lateral (desktop) y modal (mobile).
- ? Estado global con Context para detalle y loading.
- ? Estilos con Tailwind CSS y tipografia personalizada.

---

## ?? Stack Tecnologico

| Tecnologia | Proposito |
| --- | --- |
| React 18 | UI declarativa y componentes reutilizables |
| Vite 5 | Bundler y dev server rapido |
| Tailwind CSS 3 | Estilos utilitarios y responsive |
| @tabler/icons-react | Iconos SVG para UI |
| ESLint | Linting de codigo |

---

## ? Inicio Rapido

### Prerrequisitos

- Node.js 18+ (recomendado)
- npm 9+ (o gestor equivalente)
- API local disponible en `http://localhost:8080`

### Instalacion

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

### Build de produccion

```bash
npm run build
```

### Preview

```bash
npm run preview
```

---

## ?? Arquitectura

### Patrones utilizados

- SPA con React.
- Estado global via Context API.
- Componentizacion por responsabilidad.

### Flujo de datos (ASCII)

```
[API Local] ---> [Pokemons.jsx] ---> [PokemonList] ---> [PokemonPreview]
                         |                 |
                         |                 +--> click -> Context -> Modal/Aside
                         +--> state: allPokemones / pokemonName
```

### Modulos principales

- `context/`: estado global del pokemon seleccionado y loading.
- `components/`: UI de listado, detalle y modal.
- `hooks/`: acceso tipado y simple al contexto.
- `utils/`: constantes de UI por tipo.

---

## ??? Estructura del Proyecto

```
07-frontpokedex/
+- public/
+- src/
¦  +- components/
¦  ¦  +- Aside.jsx              # Panel de detalle desktop
¦  ¦  +- ModalPokemon.jsx       # Modal de detalle mobile
¦  ¦  +- PokemonDetail.jsx      # Vista de detalle
¦  ¦  +- PokemonList.jsx        # Grid responsive
¦  ¦  +- PokemonPreview.jsx     # Card individual
¦  ¦  +- Pokemons.jsx           # Buscador + fetch
¦  +- context/
¦  ¦  +- PokemonContext.jsx     # Estado global
¦  +- hooks/
¦  ¦  +- usePokemonContext.jsx  # Hook del contexto
¦  +- utils/
¦  ¦  +- constants.js           # Colores por tipo
¦  +- App.jsx                   # Layout general
¦  +- index.css                 # Tailwind + fuentes
¦  +- main.jsx                  # Entry point
+- index.html
+- tailwind.config.js
+- vite.config.js
+- package.json
```

---

## ?? Componentes / Modulos Principales

- `Pokemons.jsx`: obtiene el listado desde la API, maneja search y renderiza el grid.
- `PokemonList.jsx`: define el grid responsive con cards de ancho consistente.
- `PokemonPreview.jsx`: card con imagen, nombre y tipos.
- `PokemonDetail.jsx`: detalle extendido con habilidades.
- `Aside.jsx`: panel de detalle fijo en desktop.
- `ModalPokemon.jsx`: modal de detalle en mobile.
- `PokemonContext.jsx`: expone el Pokemon seleccionado y loading.

---

## ??? Validaciones

- La busqueda usa `onSubmit` y filtra localmente por nombre.
- Se manejan estados de carga y error al consumir la API.
- No hay validaciones de formulario adicionales en esta version.

---

## ?? API Integration / Endpoints

Base URL actual:

- `http://localhost:8080`

| Metodo | Endpoint | Descripcion |
| --- | --- | --- |
| GET | `/api/pokemones/all` | Obtiene la lista completa de Pokemon |

### Modelo de datos (esperado por el frontend)

```json
{
  "id": 1,
  "name": "bulbasaur",
  "image": "https://...",
  "animatedImage": "https://...",
  "type": ["Grass", "Poison"],
  "skills": ["overgrow", "chlorophyll"]
}
```

<details>
  <summary>Notas de integracion</summary>

- El frontend espera un objeto de respuesta con `data.data` como arreglo.
- `type` se usa para pintar colores por tipo desde `src/utils/constants.js`.
</details>

---

## ?? Scripts Disponibles

| Script | Comando | Descripcion |
| --- | --- | --- |
| Dev | `npm run dev` | Inicia el servidor de desarrollo |
| Build | `npm run build` | Genera build para produccion |
| Preview | `npm run preview` | Previsualiza build local |
| Lint | `npm run lint` | Ejecuta ESLint |

---

## ?? Variables de Entorno

Este proyecto no requiere variables de entorno en la version actual.

| Variable | Descripcion | Ejemplo |
| --- | --- | --- |
| N/A | No hay variables definidas | N/A |

---

## ?? Deployment

Servicio recomendado: Vercel o Netlify.

### Pasos sugeridos

1. Ejecuta `npm run build`.
2. Publica el directorio `dist`.
3. Configura el dominio y variables si luego parametrizas la API.

Ejemplo (Vercel):

```bash
npm run build
# Output en dist/
```

---

## ?? Guias de Uso

- Buscar Pokemon: escribe un nombre y presiona el boton de busqueda.
- Ver detalle: haz click en una card; en desktop se abre el panel lateral y en mobile el modal.
- Navegar listado: el grid se adapta a desktop, tablet y mobile.

---

## ?? Personalizacion / Extension

- Cambiar URL de API: edita `src/components/Pokemons.jsx`.
- Ajustar colores por tipo: modifica `src/utils/constants.js`.
- Estilos globales: revisa `src/index.css` y `tailwind.config.js`.

---

## ?? Contribuciones

1. Haz un fork del proyecto.
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`.
3. Realiza tus cambios y agrega tests si aplica.
4. Abre un Pull Request con descripcion clara.

---

## ?? Licencia

Este proyecto esta bajo la licencia MIT.

---

<div align="center">
  Hecho con cuidado para una Pokedex clara y responsive.
  <br />
  <a href="#front-pokedex">Volver arriba</a>
</div>
