import { Router } from 'express';

import { nonImpl } from './api';

const router = Router();

router.get('/', nonImpl);

export default router;
