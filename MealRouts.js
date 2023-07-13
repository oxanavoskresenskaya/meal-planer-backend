const { Router } = require ('express');
const router = Router();
const { getMeal, saveMeals, deleteMeal, editMeal } = require ('./MealController');

router.get ('/', getMeal);
router.post ('/saveMeals', saveMeals);
router.post ('/deleteMeal', deleteMeal);
router.post ('/editMeal', editMeal);


module.exports = router;