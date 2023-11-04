import Restaurant from "../models/restaurant.js";


// TODOO 1 Permet d'ajouter un nouveau restaurant 

export async function addResto(req, res, next) {
  const restaurant = new Restaurant(
    {
      nom: req.body.nom,
      tel: req.body.tel,
      adresse: req.body.adresse
    }
  );

  await restaurant.save()
    .then(res.status(200).json({ Restaurant: restaurant }))
    .catch(error => res.status(400).json({ error }));



}

// TODOO 2 Permet de récupérer la liste des restaurants 
export async function getAllResto(req, res, next) {

  await Restaurant.find()
    .then(resto => res.status(200).json({ Restaurant: resto }))
    .catch(error => res.status(400).json({ error }));



}

// TODOO 3 Permet de récupérer un restaurant à l'aide de son id
export async function getRestoById(req, res, next) {

  await Restaurant.findById(req.params.id)
    .then(resto => { return resto, res.status(200).json({ Restaurant: resto }) })
    .catch(error => res.status(400).json({ error }));



}

// ! update Restaurent 
export async function updateResto(req, res, next) {
  const existingRestaurant = await Restaurant.findById(req.params.id);

  if (!existingRestaurant) {
    return res.status(404).json({ message: 'Restaurant not found' });
  }

  if (req.body.nom) {
    existingRestaurant.nom = req.body.nom;
  }
  if (req.body.tel) {
    existingRestaurant.tel = req.body.tel;
  }
  if (req.body.adresse) {
    existingRestaurant.adresse = req.body.adresse;
  }

  await existingRestaurant.save()
    .then(resto => res.status(200).json({ updatedRestaurant: resto }))
    .catch(error => res.status(400).json({ error }));



}