import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0', 
        info: {
            title: 'Minha API c/ ES Modules e Swagger',
            version: '1.0.0',
            description: 'Documentação da API RESTful de exemplo',
        },
        servers: [
            { url: 'http://localhost:3000' },
        ],
    },
    // pegar rotas e controllers dentro de src
    apis: ['../routes/*.js', '../controllers/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;