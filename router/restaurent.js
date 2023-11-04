import express from 'express';
import * as restaurant   from '../controller/restaurant.js';

const router = express.Router();

router.route("")
    .post( restaurant.addResto)
    .get(restaurant.getAllResto) 

router.route("/:id")
    .get(restaurant.getRestoById)
    .patch(restaurant.updateResto)

export default router;
