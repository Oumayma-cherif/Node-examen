import express from 'express';
import * as plat from '../controller/plat.js';
const router = express.Router();

router.route("/:restaurantId/")
    .get(plat.getPlatFromResto)
   
router.route("/:restaurentId/:menuId")
    .post(plat.addPlat)
    .delete(plat.deletePlat)
    


export default router;
