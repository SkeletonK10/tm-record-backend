import Express from 'express';
import router from './router';

const app = Express();

app.use('/', router);

export default app;
