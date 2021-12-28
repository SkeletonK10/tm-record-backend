import { Router } from 'express';

import { nonImpl } from '../lib/util/api';
import { mainGet } from './api';

import game from './game';

const router = Router();

router.get('/', mainGet);

router.use('/user/', nonImpl);
router.use('/game/', game);

export default router;
