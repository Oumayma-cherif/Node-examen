import Menu from "../models/menu.js";

// TODO 4: Permet d'ajouter un nouveau menu 
export async function addMenu(req, res, next) {
  try {
    const penu = new Menu({
      ...req.body, 
    });

    const savedMenu = await penu.save();
    res.status(200).json({ Menu: savedMenu });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// TODO 5: Permet de récupérer la liste des menus 
export async function getAllMenu(req, res, next) {
  try {
    const penu = await Menu.find();
    res.status(200).json({ Menu: penu });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// TODO 6: Permet de récupérer un menu à l'aide de son id 
export async function getMenuById(req, res, next) {
  try {
    const penu = await Menu.findById(req.params.id);
    res.status(200).json({ Menu: penu });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}



// Update Restaurent
export async function updateMenu(req, res, next) {
  try {
    const existingMenu = await Menu.findById(req.params.id);

    if (!existingMenu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    if (req.body.nom) {
      existingMenu.nom = req.body.nom;
    }
    if (req.body.tel) {
      existingMenu.tel = req.body.tel;
    }
    if (req.body.adresse) {
      existingMenu.adresse = req.body.adresse;
    }

    const updatedMenu = await existingMenu.save();
    res.status(200).json({ updatedMenu: updatedMenu });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
