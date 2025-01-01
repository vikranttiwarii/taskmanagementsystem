const router = require('express').Router();
const controller = require('../controllers/user')
const auth = require('../middleware/auth')

router.post('/adduser',controller.addUser);
router.get('/getuser',auth.verifyToken,controller.getUser);
router.get('/singledata', auth.verifyToken, controller.getSingleData);
router.get('/getuserlistacctorole/:roleId', auth.verifyToken, controller.getuserlistacctorole);

module.exports = router;