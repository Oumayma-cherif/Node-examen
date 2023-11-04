import express from 'express';
import * as menu   from '../controller/menu.js';

const router = express.Router();

router.route("")
    .post(menu.addMenu)
    .get(menu.getAllMenu)

router.route("/:id")
    .get(menu.getMenuById)
    .patch(menu.updateMenu)

export default router;