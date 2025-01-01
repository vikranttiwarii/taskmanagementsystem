const router = require('express').Router();
const controller = require('../controllers/task')
const auth = require('../middleware/auth')

router.post('/createtask',auth.verifyToken,controller.createTask);
router.post('/gettask',auth.verifyToken,controller.getTask);
router.post('/updatetask',auth.verifyToken,controller.updateTask);
router.delete('/deletetask/:id',auth.verifyToken,controller.deleteTask);

module.exports = router;