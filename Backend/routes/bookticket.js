const router = require('express').Router();

router.route('/').get((req,res) => {
res.set('Content-Type', 'text/html');
res.send(('<h2>Test String</h2>'));

})

module.exports = router;
