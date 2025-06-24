# Sede Balcarce API - Documentación Swagger

Este proyecto utiliza **Swagger** para documentar y probar la API de manera interactiva.

## Pasos para usar Swagger en este proyecto

### 1. Instalar dependencias necesarias

Ejecuta en la raíz del proyecto:

```bash
npm install swagger-jsdoc swagger-ui-express
npm install -D @types/swagger-jsdoc @types/swagger-ui-express
```

---

### 2. Configurar Swagger

Crea un archivo llamado `swagger.config.ts` al mismo nivel que `app.ts` y agrega la siguiente configuración:

```typescript
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions: swaggerJSDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Sede Balcarce API',
            version: '1.0.0',
            description: 'API Documentation for Sede Balcarce',
        },
        servers: [
            { url: 'http://localhost:3000', description: 'Local Development Server' },
            { url: 'https://staging-api.sedebalcarce.com', description: 'Staging Server' },
            { url: 'https://api.sedebalcarce.com', description: 'Production Server' },
            {
                url: '{protocol}://{hostname}:{port}',
                description: 'Custom Server',
                variables: {
                    protocol: { enum: ['http', 'https'], default: 'http' },
                    hostname: { default: 'localhost' },
                    port: { enum: ['3000', '8080', '443'], default: '3000' }
                }
            }
        ],
    },
    apis: [
        './src/routes/*.ts', 
        './src/controllers/*.ts',
        './src/schemas/*.ts'
    ],
};

export const specs = swaggerJSDoc(swaggerOptions);
```

---

### 3. Integrar Swagger en la aplicación Express

En tu archivo `app.ts` importa y usa Swagger UI:

```typescript
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { specs } from './swagger.config';
// ...otros imports...

const app = express();
app.use(express.json());

// Ruta de la documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// ...resto de la configuración y rutas...
```

---

### 4. Documentar los endpoints

Agrega comentarios JSDoc con anotaciones Swagger encima de los métodos de tus controladores. Ejemplo para `movies.controller.ts`:

```typescript
/**
 * @swagger
 * /movies:
 *   get:
 *     summary: Obtiene todas las películas
 *     tags: [Movies]
 *     responses:
 *       200:
 *         description: Lista de películas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 */
get = (req: Request, res: Response) => {
    res.send(this.moviesService.get());
}
```

Define los esquemas en un archivo aparte (por ejemplo, `src/schemas/movie.schema.ts`):

```typescript
/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         year:
 *           type: number
 *         director:
 *           type: string
 *         duration:
 *           type: number
 *         poster:
 *           type: string
 *         genre:
 *           type: array
 *           items:
 *             type: string
 *         rate:
 *           type: number
 *       required:
 *         - title
 *         - year
 *         - director
 */
```

---

### 5. Levantar el servidor y acceder a la documentación

Inicia tu servidor normalmente:

```bash
npm run dev
```

Abre tu navegador y visita:

```
http://localhost:3000/api-docs
```

Aquí podrás ver y probar todos los endpoints documentados de tu API.

---

## Consejos

- Mantén los comentarios Swagger actualizados junto con tus endpoints.
- Puedes agregar más detalles a los esquemas y a las respuestas para mejorar la documentación.
- Si cambias la estructura de carpetas, actualiza las rutas en el array `apis` de `swagger.config.ts`.

---

¡Listo! Ahora tienes Swagger funcionando y documentando tu API de