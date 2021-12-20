import { Router } from "express";

import { main_get, non_impl } from "./api";

import game from "./game";

const router = Router();

router.get("/", main_get);

router.use("/user/", non_impl);
router.use("/game/", game);

export default router;
