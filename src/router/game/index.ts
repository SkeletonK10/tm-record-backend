import { Router } from 'express';

import { nonImpl } from '../../lib/util/api';

const router = Router();

router.get('/', nonImpl);

export default router;
