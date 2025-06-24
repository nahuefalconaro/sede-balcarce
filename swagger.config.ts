// Importa la librería swagger-jsdoc que permite generar documentación Swagger/OpenAPI desde comentarios JSDoc
import swaggerJSDoc from 'swagger-jsdoc';

// Define las opciones de configuración para swagger-jsdoc con tipado TypeScript
const swaggerOptions: swaggerJSDoc.Options = {
    // Sección de definición básica de la especificación OpenAPI
    definition: {
        // Especifica que se usa OpenAPI 3.0.0 (versión actual del estándar)
        openapi: '3.0.0',
        
        // Metadatos informativos sobre la API
        info: {
            title: 'Sede Balcarce API',       // Nombre de la API
            version: '1.0.0',                  // Versión actual
            description: 'API Documentation for Sede Balcarce', // Descripción
        },
        
        // Lista de servidores donde está disponible la API
        servers: [
            // Servidor de desarrollo local
            { url: 'http://localhost:3000', description: 'Local Development Server' },
            
            // Servidor de staging (pre-producción)
            { url: 'https://staging-api.sedebalcarce.com', description: 'Staging Server' },
            
            // Servidor de producción
            { url: 'https://api.sedebalcarce.com', description: 'Production Server' },
            
            // Servidor con variables configurables (plantilla dinámica)
            {
                url: '{protocol}://{hostname}:{port}',
                description: 'Custom Server',
                variables: {
                    protocol: { enum: ['http', 'https'], default: 'http' }, // Protocolo permitido
                    hostname: { default: 'localhost' },                    // Host por defecto
                    port: { enum: ['3000', '8080', '443'], default: '3000' } // Puertos permitidos
                }
            }
        ],
    },
    
    // Rutas donde swagger-jsdoc buscará comentarios JSDoc para documentar
    apis: [
        './src/routes/*.ts',      // Todos los archivos de rutas
        './src/controllers/*.ts', // Todos los controladores
        './src/schemas/*.ts'      // Definiciones de esquemas/models
    ],
};

// Genera la especificación Swagger/OpenAPI completa basada en las opciones
// y la exporta para ser usada en otros archivos (como en app.ts para swagger-ui-express)
export const specs = swaggerJSDoc(swaggerOptions);
