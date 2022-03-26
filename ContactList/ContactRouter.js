const router = require('express').Router();
const {getContact,createContact,getSingleContact,updateContact,deleteContact}= require('./contactLIst')

router.get('/', getContact)
router.post('/',createContact)
router.get('/:id',getSingleContact)
router.put('/:id',updateContact)
router.delete('/:id',deleteContact)

module.exports = router