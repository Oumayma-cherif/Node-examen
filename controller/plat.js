import Plat from "../models/plat.js";
import Restaurant from "../models/restaurant.js";
import Menu from "../models/menu.js";

// TODO 7: Permet d'ajouter un nouveau plat
export async function addPlat(req, res, next) {

    const plat = new Plat({
        menuId: req.params.menuId,
        restaurentId: req.params.restaurentId,
    });

    await plat.save()
        .then(res.status(201).json({ plat: plat }))
        .catch(error => res.status(400).json({ error: error.message }));


}



// TODO 8: Permet de récupérer un plat à l'aide de son id
export async function getPlatFromResto(req, res, next) {

    const restaurant = await Plat.find({ restaurentId: req.params.restaurantId });
    if (!restaurant) {
        return res.status(404).json({ error: "Restaurant not found" });
    }
    console.log(restaurant + "restaurant");
    const menuList = [];
    for (const element of restaurant) {
        let menu = await Plat.findOne({ _id: element._id });
        menuList.push(menu)
    };
    console.log("menuList   s  " + menuList);
    return res.status(200).json(menuList);


}

// TODOO Permet de supprimer un plat d'un restaurant 
export async function deletePlat(req, res, next) {
    try {
      const restaurantId = req.params.restaurentId;
      const menuId = req.params.menuId;
  
    
      if (!(await Restaurant.findById(restaurantId)) || !(await Menu.findById(menuId))) {
        return res.status(404).json({ error: 'Restaurant or Menu not found' });
      }
  
      // Find and delete the plat
      const deletedPlat = await Plat.findOneAndDelete({ restaurentId: restaurantId, menuId });
      if (!deletedPlat) {
        return res.status(404).json({ error: 'Plat not found for the given restaurant and menu' });
      }
  
      // Construct the response JSON object
      const response = {
        restaurentId: restaurantId,
        menuId: menuId,
        _id: deletedPlat._id
      };
  
      return res.status(200).json(response); // Return the response JSON
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
  
