# Palabraria 4.0

Aplicación educativa de Lengua Castellana para 4º de Primaria.

## Base técnica
- Angular 20
- Standalone components
- Zoneless (`provideZonelessChangeDetection`)
- Signals y `computed`
- TypeScript strict
- SCSS
- Lazy loading por rutas
- Vitest mediante Angular unit-test builder
- Mobile-first / responsive
- Persistencia local del progreso

## Arquitectura
- `core/models`: contratos reutilizables.
- `core/services`: progreso y lógica transversal.
- `content`: contenido separado del motor de UI.
- `features`: inicio, tema, teoría, práctica y progreso.

## Estado del contenido
Los 12 temas están desarrollados en la aplicación con secciones de comunicación, lectura, vocabulario, ortografía, gramática y, según la unidad, literatura, alfabetización mediática y escritura. Cada sección incluye teoría estructurada, ideas clave, práctica y retroalimentación.

También se incluye la unidad inicial «La lengua que hablamos». Consulta `CURRICULUM.md` para el inventario curricular y los repasos/retos y recursos finales que forman parte del alcance del curso.

IMPORTANTE: este ZIP es la base técnica de Palabraria. No pretende afirmar que ya contiene de forma íntegra todo el contenido editorial del libro de referencia. El contenido completo debe desarrollarse de forma original siguiendo el mapa curricular, sin copiar textos protegidos extensos del libro.

## Ejecutar
```bash
npm install
npm start
```

Abrir `http://localhost:4200`.

## Producción
```bash
npm run build
```


## Revisión de preguntas
Los bancos se han rehecho para evaluar el contenido de cada sección. Las preguntas genéricas repetidas de la primera versión se han eliminado. Las secciones troncales de ortografía y gramática incluyen ejercicios concretos de clasificación, elección, aplicación de reglas y análisis.
