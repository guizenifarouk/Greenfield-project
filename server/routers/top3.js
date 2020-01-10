const express = require("express");
const db = require("../../db/models/offers");
const router = express.Router();

router.get('/:id', (req,res)=>{
  // console.log(req.params.id)
  db.findOffer(req.params.id)
  .then(teacher => res.json(teacher))
  .catch(err => {
    console.log(err)
  })

})

module.exports = router;