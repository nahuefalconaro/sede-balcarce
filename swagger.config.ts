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
            {
                url: 'http://localhost:3000',
                description: 'Local Development Server'
            },
            {
                url: 'https://staging-api.sedebalcarce.com',
                description: 'Staging Server'
            },
            {
                url: 'https://api.sedebalcarce.com',
                description: 'Production Server'
            },
            {
                url: '{protocol}://{hostname}:{port}',
                description: 'Custom Server',
                variables: {
                    protocol: {
                        enum: ['http', 'https'],
                        default: 'http'
                    },
                    hostname: {
                        default: 'localhost'
                    },
                    port: {
                        enum: ['3000', '8080', '443'],
                        default: '3000'
                    }
                }
            }
        ],
    },
    apis: [
        './src/routes/*.ts', 
        './src/controllers/*.ts',
        './src/schemas/*.ts'], // Rutas relativas desde la raíz del proyecto
};

export const specs = swaggerJSDoc(swaggerOptions);