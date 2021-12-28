import Express from 'express';
import expressJSDocSwagger from 'express-jsdoc-swagger';

import router from './router';

const app = Express();

app.use('/', router);

const swaggerOptions = {
  info: {
    version: '1.0.0',
    title: 'tm-record-backend',
    license: {
      name: 'MIT',
    },
    description: 'Backend server for Terraforming Mars recording system',
  },
  security: {
    BasicAuth: {
      type: 'http',
      scheme: 'basic',
    },
  },
  baseDir: __dirname,
  filesPattern: './**/*.ts',
  swaggerUIPath: '/api-docs',
  exposeSwaggerUI: true,
  exposeApiDocs: false,
  apiDocsPath: '/v3/api-docs',
  notRequiredAsNullable: false,
  swaggerUiOptions: {},
  multiple: true,
};

expressJSDocSwagger(app)(swaggerOptions);

export default app;
