import { Router } from 'express';

import { mainGet, nonImpl } from './api';

import game from './game';

const router = Router();

router.get('/', mainGet);

router.use('/user/', nonImpl);
router.use('/game/', game);

export default router;
