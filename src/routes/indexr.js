const {Router} = require('express');//requiero su metodo Router
const router = Router();


router.get('/',(req, res)=>{
    res.json("hola desde el router");
});

//exportamos en objeto
module.exports = router;