const router = require('express').Router();
const {createRegister,getLogin} = require('../controller/user')

router.
    route('/register')
    .post(createRegister);

router.
    route('/login')
    .get(getLogin);

module.exports = router;
