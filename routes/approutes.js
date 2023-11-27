const express=require('express');
const router=express.Router();
const routecontroller=require('../controllers/expensecontrol');
router.get('/expenses',routecontroller.getexpense);
router.post('/addexpense',routecontroller.addexpense);
router.post('/expenses/delete/:id',routecontroller.deleteexpense);
module.exports=router;